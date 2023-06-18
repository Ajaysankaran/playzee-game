package config

import (
	"context"
	"fmt"

	"google.golang.org/grpc"
)

func AuthInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
	fmt.Println("Interceptor::", info.FullMethod)
	return handler(ctx, req)
}
