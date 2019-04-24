set -xe

USER=admin
IP=54.77.246.109

scp ../docker-compose.yml $USER@$IP:/home/ec2-user/docker-compose.yml
scp ../Caddyfile $USER@$IP:/etc/Caddyfile
ssh $USER@$IP sudo docker-compose up