// const mongoose = require('mongoose');

// const connectLibraryDB = () => {
//   return mongoose.createConnection(
//     'mongodb+srv://admin:Power30%402025@college-database.mongodb.net/Library?retryWrites=true&w=majority',
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   );
// };

// const connectAcademicsDB = () => {
//   return mongoose.createConnection(
//     'mongodb+srv://admin:Power30%402025@college-database.mongodb.net/Academics?retryWrites=true&w=majority',
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   );
// };

// module.exports = {
//   libraryConn: connectLibraryDB(),
//   academicsConn: connectAcademicsDB(),
// };

const mongoose = require('mongoose');

const connectDatabases = async () => {
  try {
    // Connect to the cluster (without specifying DB name)
    await mongoose.connect(
      // 'mongodb+srv://admin:Power30%402025@college-database.mongodb.net/?retryWrites=true&w=majority',
      // {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // }
      'mongodb+srv://admin:Power30%402025@college-database.0nefxgd.mongodb.net/?retryWrites=true&w=majority&appName=college-database'
    );

    // Now use separate DBs
    const libraryDB = mongoose.connection.useDb('Library');
    const academicsDB = mongoose.connection.useDb('Academics');

    return { libraryDB, academicsDB };
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDatabases;


