package utils

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
)

func WriteJson(body interface{}, w http.ResponseWriter) {
	j, err := json.Marshal(body)
	if err != nil {
		log.Fatal("Error occured while serializing JSON", err)
	}
	_, err = w.Write(j)

	if err != nil {
		log.Fatal(err)
	}
}

func ReadJson[T any](w http.ResponseWriter, r *http.Request, object T) interface{} {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusBadRequest)
	}
	err = json.Unmarshal(body, &object)
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusBadRequest)
	}
	return object
}
