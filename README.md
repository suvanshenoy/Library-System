# Library System


### Cli tools required:

- cmake,zig build system
- typescript / nodejs
- bun or pnpm or npm
- python
- poetry

### running the backend:

- use the following commands:

first go into backend directory using cd
```
         cd backend
```

- use build.zig to build the project and create an executable
to build the project use:
```
         zig build run-cmake 
         zig build run-ninja
```

- If zig was not already installed , install from  https://ziglang.org/download/

- after building the project an executable get created in 'build' directory , run it using:
```
         ./build/LibraryBackend
```



### running the frontend:
 - to install the dependencies in package.json required for frontend run:

```
         [you_package_manager] install
```
###                 or
```
         [you_package_manager] i
```

- to run the project:
```
         [your_package_manager] start
```

### running the python machine learning backend:
- make sure you have poetry installed
- to install the dependencies use:
```
         poetry install
```

- next you need to go into the virtual environment created by poetry , for that your can use:
```
         poetry shell
```

- to run the project:
```
         python3 -m flask --app main.py --debug run
```


Note: make sure you run them simultaneous in 3 terminal sessions

