package setting

import (
	"fmt"
	"log"
	"time"

	"gopkg.in/ini.v1"
)

var (
	// Cfg read config from conf/app.ini
	Cfg *ini.File

	// RunMode is running mode, debug or release
	RunMode string

	// HTTPPort is
	HTTPPort int
	// ReadTimeout
	ReadTimeout time.Duration
	WriteTimeout time.Duration

	PageSize int
	JwtSecret string
)

func init() {
	fmt.Printf("in setting init\n")
	var err error
	Cfg, err = ini.Load("conf/app.ini")
	if err != nil {
		log.Fatalf("Failed to parse 'conf/app.init': %v", err)
	}

	LoadBase()
	LoadServer()
	LoadApp()
}

// LoadBase loads run_mode config
func LoadBase() {
	RunMode = Cfg.Section("").Key("RUN_MODE").MustString("debug")
}

// LoadServer loads server info: httpport, readtimeout, writetimeout
func LoadServer() {
	sec, err := Cfg.GetSection("server")
	if err != nil {
		log.Fatalf("Failed to get section 'server': %v", err)
	}

	HTTPPort = sec.Key("HTTP_PORT").MustInt(8000)
	ReadTimeout = time.Duration(sec.Key("READ_TIMEOUT").MustInt(60)) * time.Second
	WriteTimeout = time.Duration(sec.Key("WRITE_TIMEOUT").MustInt(60)) * time.Second
}

// LoadApp loads app config
func LoadApp() {
	sec, err := Cfg.GetSection("app")
	if err != nil {
		log.Fatalf("Failed to get section 'app': %v", err)
	}

	PageSize = sec.Key("PAGE_SIZE").MustInt(10)
	JwtSecret = sec.Key("JWT_SECRET").MustString("!@)*#)!@U#@*!@!)")
}