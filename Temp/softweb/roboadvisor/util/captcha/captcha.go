package captcha

import (
	"time"
	"io"
	"bytes"
	"errors"
	"github.com/dchest/captcha"
)

const (
	// Default number of digits in captcha solution.
	DefaultLen = 4
	// The number of captchas created that triggers garbage collection used
	// by default store.
	CollectNum = 100
	// Expiration time of captchas used by default store.
	Expiration = 10 * time.Minute
)

var (
	ErrNotFound = errors.New("captcha: id not found")
	// globalStore is a shared storage for captchas, generated by New function.
	globalStore = NewMemoryStore(CollectNum, Expiration)
)

// SetCustomStore sets custom storage for captchas, replacing the default
// memory store. This function must be called before generating any captchas.
func SetCustomStore(s captcha.Store) {
	globalStore = s
}

// New creates a new captcha with the standard length, saves it in the internal
// storage and returns its id.
func New() string {
	return NewLen(DefaultLen)
}

// NewLen is just like New, but accepts length of a captcha solution as the
// argument.
func NewLen(length int) (id string) {
	id = randomId()
	globalStore.Set(id, RandomDigits(length))
	return
}

// Reload generates and remembers new digits for the given captcha id.  This
// function returns false if there is no captcha with the given id.
//
// After calling this function, the image or audio presented to a user must be
// refreshed to show the new captcha representation (WriteImage and WriteAudio
// will write the new one).
func Reload(id string) bool {
	old := globalStore.Get(id, false)
	if old == nil {
		return false
	}
	globalStore.Set(id, RandomDigits(len(old)))
	return true
}

// WriteImage writes PNG-encoded image representation of the captcha with the
// given id. The image will have the given width and height.
func WriteImage(w io.Writer, id string, width, height int) error {
	d := globalStore.Get(id, false)
	if d == nil {
		return ErrNotFound
	}
	_, err := NewImage(id, d, width, height).WriteTo(w)
	return err
}



// Verify returns true if the given digits are the ones that were used to
// create the given captcha id.
//
// The function deletes the captcha with the given id from the internal
// storage, so that the same captcha can't be verified anymore.
func Verify(id string, digits []byte) bool {
	if digits == nil || len(digits) == 0 {
		return false
	}
	reald := globalStore.Get(id, true)
	if reald == nil {
		return false
	}
	return bytes.Equal(digits, reald)
}

// VerifyString is like Verify, but accepts a string of digits.  It removes
// spaces and commas from the string, but any other characters, apart from
// digits and listed above, will cause the function to return false.
func VerifyString(id string, digits string) bool {
	if digits == "" {
		return false
	}
	ns := make([]byte, len(digits))
	for i := range ns {
		d := digits[i]
		switch {
		case '0' <= d && d <= '9':
			ns[i] = d - '0'
		case d == ' ' || d == ',':
			// ignore
		default:
			return false
		}
	}
	return Verify(id, ns)
}