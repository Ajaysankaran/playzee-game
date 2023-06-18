package model

type UserModel struct {
	UserId    string
	Username  string
	Firstname string
	Lastname  string
	Email     string
	LoginType LoginType
	Password  string
}

type LoginType string

const (
	USER_PASSWORD LoginType = "USER_PASSWORD"
)

type LoginInput struct {
	Username  string
	Password  string
	Email     string
	LoginType string
}
