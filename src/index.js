const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');




// Initialization
const app = express();


app.set('views', path.join(__dirname, 'views'));
const hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',

    helpers: {
        ifEquals: function(a, b, opts) {
            if (a === b) {
                return opts.fn(this);
                
            } else {
                return opts.inverse(this);
            }
        },
        increment: function(value){
            return parseInt(value) + 1;
        },
        commaNumber: function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
})
// Settings
app.set('port', process.env.PORT || 3000);

app.engine(".hbs", hbs.engine);
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({extended: true}));




// Routes 
app.use(require('./routes/index'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

//  Server is listen
const server = app.listen(app.get('port'), () => {
    console.log('Server runnin on port: ', app.get('port'))
});

