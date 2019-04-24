set -xe

USER=ec2-user
IP=54.77.246.109

scp docker-compose.yml $USER@$IP:/home/ec2-user/docker-compose.yml
# scp ../Caddyfile $USER@$IP:/etc/Caddyfile
scp -r auth-server $USER@$IP:/home/ec2-user
scp -r app $USER@$IP:/home/ec2-user

# ssh $USER@$IP << EOF
#   cd /home/ubuntu
#   docker-compose build
#   docker-compose up
# EOF