cmake_minimum_required(VERSION 3.30.3)
project(LibrarySystem)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_STANDARD ON)

set(SRC_DIR "main")

include(FetchContent)

FetchContent_Declare(
    httplib
    GIT_REPOSITORY https://github.com/yhirose/cpp-httplib
    GIT_TAG v0.17.0
)
FetchContent_MakeAvailable(httplib)


file(GLOB_RECURSE CXX_SRCS ${SRC_DIR}/*.cpp)
file(GLOB_RECURSE CXX_HEADERS ${SRC_DIR}/*.hpp)

add_executable(${PROJECT_NAME}
    ${CXX_SRCS}
    ${CXX_HEADERS}
)

target_link_libraries(${PROJECT_NAME} 
    httplib::httplib
)

add_compile_options(${PROJECT_NAME} PRIVATE
    -Wall
    -Werror
    -Wpedantic
    -Wextra
    -fsanitize=address
)
