
// <a className="waves-effect lime darken-4  btn">2</a>

class Calculadora extends React.Component {
    state = {
        res: ""
    }

    onDigit = (digit) => {
        let arrOperacion = this.state.res.toString()
        arrOperacion = arrOperacion.split("")
        let ultimoCaracterOperacion = arrOperacion[arrOperacion.length - 1]

        if (isNaN(digit)) {

            if (ultimoCaracterOperacion == digit) {

            } else if (ultimoCaracterOperacion !== digit && isNaN(ultimoCaracterOperacion)) {
                arrOperacion.pop()
                arrOperacion.push(digit)
                const expresion = arrOperacion.join("")

                this.setState({ res: expresion })
            } else {
                const expresion = this.state.res + digit

                this.setState({ res: expresion })
            }


        }
        else if (!isNaN(digit)) {
            if (arrOperacion.length == 1) {
                this.setState({ res: digit })
            } else {
                const expresion = this.state.res + digit
                this.setState({ res: expresion })
            }

        }

    }
    ejecutarOpercacion = () => {

        const resultados = eval(this.state.res)

        this.setState({ res: resultados })
    }
    render() {
        return (
            <div>
                <div className="z-depth-2 lime darken-2 white-text center-align resultados" >
                    {this.state.res || "0"}
                </div>
                <div className="calc-container lime lighten-1 hoverable z-depth-2">
                    {
                        ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"].map(digit => {
                            return (
                                <a key={digit} className="waves-effect lime darken-3 btn" onClick={() => this.onDigit(digit)}>{digit}</a>
                            )
                        })
                    }

                    <div className="operadores center-align">
                        {
                            ["+", "-", "*", "/"].map(digit => {
                                return (
                                    <a key={digit} className="waves-effect lime darken-3 btn" onClick={() => this.onDigit(digit)}>{digit}</a>
                                )
                            })
                        }
                        <a className="waves-effect lime darken-3 btn" onClick={() => this.setState({ res: "" })}>C</a>
                    </div>
                    <a className="waves-effect lime darken-3 btn" onClick={this.ejecutarOpercacion}>ENTER</a>

                </div>

                <style jsx>
                    {`
                    .resultados{
                        width:275px;
                        margin:0 auto;
                        font-size: 32px;
                        margin-top:10px;
                        margin-bottom:10px;
                    }
                    .calc-container{
                        width:275px;
                        margin:0 auto;
                        text-align:center;
                        padding:12px;
                    }
                    .calc-container a{
                        margin:3px;
                    }
                    .operadores{
                        padding:10px;
                        margin-top:10px;
                    }
                `}
                </style>
            </div>
        );
    }
}

export default Calculadora