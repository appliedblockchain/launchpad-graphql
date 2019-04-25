set -xe

USER=ec2-user
IP=54.77.246.109

scp docker-compose.yml $USER@$IP:/home/ec2-user/docker-compose.yml
rsync -e ssh -av --exclude='node_modules' auth-server $USER@$IP:/home/ec2-user
rsync -e ssh -av --exclude='node_modules' app $USER@$IP:/home/ec2-user