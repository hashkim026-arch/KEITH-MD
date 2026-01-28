/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');
const path = require('path');
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU25KiSBD9l3rFGLkJakRHDKIoIgJqt8LGxEYBBZRcpQoRJ/z3Cbqnp+dhd7aXpyIpMk+eczK/g6LEBBmoA9PvoKrxFVLUH2lXITAFsyaKUA0GIIQUgilotodhuRDn3uLKd0d3/EK5jZzcXVduuTnT1vNtKueUu9YseQKPAagaP8PBHxJOsmvEchoXafotcs7JwttyEisxcdUeR20dndeMbXpLibTjJ/DoM0Jc4yJeVAnKUQ0zA3U2xPXn4Bu2Go8UAoO8m+ezJrLIKLraiSFQ4e5wnLlO52Wn3Tw1bz8HnxnzoW8uD0esSa1xL/zNpGuj8HAQGqJf7sPSZ4RD6y7ZdPEGn+C4QKEeooJi2n2ad90g8s5dBPzdXZ7vjikb2qmxPG1+r2xfo8qFpEp7Xugvafo54JvRWhB8jESdmHmsBMOX25aYG4eLoC4+d/nF8se+zAfqzP0duF2/eyX9P7xLa1VUnFIySWOk28LuzqIRJL6mhbySnl7yZR3e1MJejk7m5+DzUhjNpNXZrmesr8S7qvR33NZp/YXnwhBj1Zu9JN6KHXbPH/Ahbeo/oYxlR3WH58TMA6fgJ0vjTLLN83ED4eU6Xw/ZmzUqTrzJaMRYBHzjj3eNMvfjI7YzyxouZnbtCR7rLKT7/jwamuUKbh3sPL12lKJOD8GUewxAjWJMaA0pLos+JksDAMPrHgU1oq/sguw4QRfv4ptE2s/0PNznVjLWtRVkcL25iZeysE9oF2xbjTyBAajqMkCEoHCFCS3rzkSEwBgRMP3r2wAU6EbfdOurCdwARLgm9LloqqyE4buo7x9hEJRNQfddEaj9AdVgyn6EEaW4iElPY1PAOkjwFakJpARMI5gR9KtBVKMQTGndoF9Dq5Zhz/t4wVlHlxfBAOSveuCwl3QkySNxJEx4SZxyX8mXts8Kq+pLgSgYgAL2l8G5IfRvA+dgALLX/ziO5yRB5kf8ZDIWuCn3tY8/fiHuC4SIQpwRMAWqUa9Hw/FmsTkTKSDLpbKIFTVWwEeH7055k2LGq5JxWkmN5iVpaue7ozNrfHSI3ehohUp6m49Wu+yyth336R+SgClg7fCaajHjqoGLD63RiS2zV30Nn26BH8MjYjiTHy/uyXDv4rTZW3lVTEyFzXkLHQ1Lpoq2lKy4M9STNZnZ+bPIp0lvqwEI0RUH6PdiTByxd3+1Dc2taA037fNMV42ldJ7Ix+QWW7dNcpHv4/M61lS5QQrWL5dwc6NyEw+fmaIIU4bcZYra0zaw4Ys3yvbD9Vl58/DrDGU/dxd+tVevXf8aYfS6Cn6K9F9avuHuHcc+Br+l+Llb/mU+Z04YNzi7MXVydL31fJS+pIqfC6m4XHHnwlmbDrNjPYgP7BI8Ht8GoMogjco6B1NAch+DAajLpvevXkTlHyqpiq7PnHjfd51BQpWPmTjgHBEK8wpMOVmaSIIgiOLbLbsuqxUkSU+AzblJ1Bu8U6pqTyF9HzGg9M98o4LHDxJ7XuV9BwAA';
const dev = process.env.OWNER_NUMBER || '256754539264';
const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 
const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,  
  dev,
  session,
};

//must run
