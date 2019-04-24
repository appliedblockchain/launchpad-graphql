set -xe

USER=ec2-user
IP=54.77.246.109

scp docker-compose.yml $USER@$IP:/home/ec2-user/docker-compose.yml
scp -r auth-server $USER@$IP:/home/ec2-user
scp -r app $USER@$IP:/home/ec2-user