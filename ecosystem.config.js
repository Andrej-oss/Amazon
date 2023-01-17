module.exports = {
  apps : [{
    script: 'npm start'
  }],

  deploy : {
    production : {
      key  : 'ohio4.pem',
      user : 'ubuntu',
      host : '13.59.210.208',
      ref  : 'origin/main',
      repo : 'git@github.com:Andrej-oss/Amazon.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_option' : 'forwardAgent=yes'
    }
  }
};
