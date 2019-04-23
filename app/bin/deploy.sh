set -xe

USER=ubuntu
IP=34.241.245.254

scp ../docker-compose.yml $USER@$IP:/home/ubuntu/docker-compose.yml
scp ../Caddyfile $USER@$IP:/etc/Caddyfile
ssh $USER@$IP sudo docker-compose up