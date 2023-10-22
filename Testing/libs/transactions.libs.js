const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = {
  //create new transactions
  createTransactions: async (source_account_id, destination_account_id, amount) => {
    try {

      const transactions = await prisma.transactions.create({
        data: {
          source_account_id,
          destination_account_id,
          amount,
        }
      });
      return transactions;
    } catch (err) {
      throw (err);
    }
  },

  //get all transaksi
  getAllTransactions: async () => {
    try {
   
   const transactions = await prisma.transactions.findMany({
     select: {
        id:true,
        source_account_id: true,
        destination_account_id: true,
        amount: true,
     },

   });      
     return transactions;
   } catch (err) {
       throw err;
   }
},


  //fet transactions by id
  getTransactionsById: async (id) => {
    try {
      const transactions = await prisma.transactions.findUnique({ where: { id } });
      if (!transactions) throw 'id tidak ditemukan';

      return transactions;
    } catch (err) {
      throw err;
    }
  },


};