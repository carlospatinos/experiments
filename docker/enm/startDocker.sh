#docker run --dns 8.8.8.8 --dns 8.8.4.4 --dns 159.107.164.10 --dns 153.88.112.200 --dns 147.117.20.200 -ti b9aeeaeb5e17 bash
docker run -d b9aeeaeb5e17 /bin/sh -c "while true; do echo hello world; sleep 1; done"
