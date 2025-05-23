#!/bin/bash 
echo "Iniciando a configuração do ambiente para o projeto VITA da empresa WhenSix." 

# Atualizar os pacotes 
sudo apt update 

echo "Verificando instação do Node..."
node --version
if [ $? = 0 ]; then
   echo "Node instalado"
else
   echo "Instalando curl..."
   sudo apt install curl
   echo "Instalando Node..."
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs
fi

echo "Verificando instação do Git..."
git --version
if [ $? = 0 ]; then
   echo "Git instalado"
else
   echo "Instalando git..."
   sudo apt install git
fi

# Verificar se o Java já está instalado 
echo "Verificando instação do Java..."
java -version 

if [ $? = 0 ]; then 
   echo "Java já está instalado!" 
else 
   echo "Java não está instalado." 
   echo "Gostaria de instalar o Java? [s/n]" 
   read get 
   if [ "$get" == "s" ]; then 
      echo "Instalando Java..." 
      sudo apt install openjdk-21-jdk -y

   else 
      echo "Instalação do Java foi cancelada. Encerrando o script." 
      exit 1 
   fi 
fi 

# Verificar novamente as versões após a instalação 
java -version 
javac -version 

# Verificar se o Docker já está instalado 
echo "Verificando instação do Docker..."
docker --version 
if [ $? = 0 ]; then 
   echo "Docker já está instalado!" 
else 
   echo "Docker não está instalado." 
   echo "Instalando Docker..." 
   sudo apt install docker.io -y 
   sudo systemctl start docker 
   sudo systemctl enable docker 
   echo "Docker instalado com sucesso!" 
fi 

# Verificar se o diretório do projeto já existe 
if [ -d "VITA" ]; then 
   echo "Repositório já clonado. Pulando a etapa de clonagem." 
else 
# Clonar o repositório do projeto 
   echo "Clonando o repositório do projeto VITA..." 
   git clone https://github.com/WhenSix/VITA.git 
fi 

# Entrar no diretório do projeto 
cd VITA
echo "Instalando dependencias do projeto..."
npm install
echo "Configuração concluída com sucesso!"