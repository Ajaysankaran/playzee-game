package config

import (
	"errors"
	"log"

	"github.com/gocql/gocql"
)

var Cdb_Session gocql.Session

func InitDatabase() error {
	cluster := gocql.NewCluster("127.0.0.1")
	cluster.Keyspace = "playzee"
	cluster.Consistency = gocql.Quorum
	session, err := cluster.CreateSession()

	if err != nil {
		log.Fatalf(err.Error())
		return errors.New("Error occured while connecting to database")
	}

	Cdb_Session = *session
	return nil
}
