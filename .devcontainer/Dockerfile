FROM node:16.6.0
RUN apt-get update
## Install zsh
RUN apt-get install -y zsh
## Install oh-my-zsh
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
COPY .oh-my-zsh /root/.oh-my-zsh/
## https://github.com/moby/moby/issues/37965
RUN true
COPY .zshrc /root/
## install node apps
RUN npm install -g http-server live-server esbuild
## install deno
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV PATH="/root/.deno/bin/:${PATH}"