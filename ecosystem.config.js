module.exports = {
  apps : [{
    script: 'npm start'
  }],

  deploy : {
    production : {
      key  : 'ohio_key1.pem',
      user : 'ec2-user',
      host : '18.223.121.186',
      ref  : 'origin/main',
      repo : 'git@github.com:Andrej-oss/Amazon.git',
      path : '/home/ec2-user',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_option' : 'forwardAgent=yes'
    }
  }
};
