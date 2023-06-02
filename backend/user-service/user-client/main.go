package main

import (
	"context"
	"flag"
	"log"
	"time"

	pb "github.com/playzee/backend/user-service/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var (
	addr = flag.String("addr", "localhost:9000", "the address to connect to")
)

func main() {
	flag.Parse()
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Printf("did not connect %v", err)
	}

	defer conn.Close()
	c := pb.NewUserServiceClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	usr, err := c.GetUser(ctx, &pb.UserId{Id: "10"})
	if err != nil {
		log.Printf("Couldn't connect %v", err)
	}
	log.Printf("user: %s", usr)
}
