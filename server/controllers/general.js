import User from "../models/user.js"
import Transaction from "../models/transaction.js"
import OverallStat from "../models/overallStat.js"


export const getUser = async(req,res) => {
try {
    const {id} = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);

} catch(error) {
    res.status(404).json({message: error.message})

}
}
export const getDashBoardStats = async(req,res) => {
    try {
        const currentMonth = "November";
        const currentYear = 2021;
        const currentDay = "2021-11-15"
         // Recent Transactions
         const transactions = await Transaction.find().limit(50).sort({createdOn: -1});

         const overallStat = await OverallStat.find({year: currentYear});
         const {totalCustomers, 
            yearlyTotalSoldUnits,
            yearlySalesTotal,
            monthlyData,
            SalesByCategory} =  overallStat[0];

            const thisMonthStat = overallStat[0].monthlyData.find(({month }) => {
                return month === currentMonth;

            });
            const todayStats = overallStat[0].dailyData.find(({ date }) => {
                return date === currentDay;

            });
            res.status(200).json({
                totalCustomers, 
            yearlyTotalSoldUnits,
            yearlySalesTotal,
            monthlyData,
            SalesByCategory,
            thisMonthStat,
            todayStats,
            transactions
            })

    } catch(error) {
        res.status(404).json({message: error.message});
    }
}
