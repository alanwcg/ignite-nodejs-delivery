export const authConfig = {
  clientTokenSecret: process.env.CLIENT_TOKEN_SECRET || 'client_secret',
  deliverymanTokenSecret: process.env.DELIVERYMAN_TOKEN_SECRET || 'deliveryman_secret',
  tokenExpiresIn: '1d',
}