import React from "react" 
// import { Redirect } from "react-router-dom"
import {connect} from "react-redux"
import { handleChange } from "../../util/component_util"
import { thunkLogin } from '../../actions/user_actions'

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    componentDidUpdate(){
        if(this.props.isAdmin){
            this.props.history.push(`/admin`)
        }else if (this.props.userId) {
            this.props.history.push(`users/${this.props.userId}`)
        }
    }

    checkInput(){
        if(this.state.email.length >= 4){
            if(this.state.password.length >= 4 ){
                return "sign-in-check"
            }
        }
        return ""
    }
    
    handleErrors(){
        return this.props.loginErrors === null ? null : this.props.loginErrors
    }

    handleSubmit(){
        if(this.state.email.length >= 4 && this.state.password.length >= 4){
            this.props.login(this.state);
            this.setState({
                email: "",
                password: ""
            });
        }
    }
    
    render(){
        return(
            <div className="sign-in">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAADBCAMAAAAace62AAAB4FBMVEUAAAD////+/v7n5+fa2tru7u75+fnq6uqenp7W1tYJCQne3t7i4uKJiYmCgoKioqJYWFi4uLi/v78VFRUvLy/JycljY2OxsbFzc3O+vr5oaGhfX1/FxcU/Pz+QkJBGRkYnJydQUFB6enrWUUE4ODggICATExOrq6vrhKiXl5fjkSf1kbdzwMJCQkLZTDN9xsniiQDYPCHmhap/u67P4uJptrbSSDRopKft0M7XVUcsPjrRPijjo17canQtSEhploypz8+GTmLtxMDWOR3ke5hfNURPLjneYGBShYbz393neY4sGSDPe5rreaLip6LglI2KqKjHfiauZ4Hxz9ogEhdBAACeMCPAnZomDw02WVKXin723srhhXyzRztsp5pFLAyLWBjpw6B1LSNXOA96IheSv7Wtbh7ThiSXOi5hd3bSmpW/1tHToGzgl0LWdGnUZ1pWIRpBaGjntYSnSkq2NiHXZ3XfgFjuzrE+eXror8IcLi7EUEvtxdSWVmzhj4bFm7K0obEQSEToh42PWwZmQgA1IwA5FRB1RljokVRqKCCHs7jkk7PPl7HXZTnddjfjhTFAGSRmyMrfqZfCbGOygHqasr2/obdyRECwh4IwEAjztHjgpIAkGAbrjnl7MU3mmEJxc4vrAAAat0lEQVR4nO2d+X8TR5bA1ZK7JfmSjS3fyIeMLdnGGGEbKwJijLER2DLYzGyImQSSgRxs7DVZD4EAwyRknOAccyU7m81u/tWtV9XdarVeHX1M8ovf5wMIqau66ltVr15VvaqKRI7kSI7kSI7kSI7kXyB9+d6GZlvSia5fO0G/vPR1x7V60QdaTvzaKfvlpCeNILCkOf9rJ+8XkRPjUQEEKgMnf7XUDQ4j0tZ2POTXdA7IGFBJjnqKtSefaR3p6evr6xkZacmM+E3cCUEt7fYbKSbtShBA2tUj7aqrXi2+EndC06I80TQjNK01ogyBSLRPMdY+JPC4n+Sl+RQARNxPnOhrvMkxtWjRsKoMHTImpEA4tHqPs146DY8USP85pBBvAg0a857AFhmGpPc466TNMwSQNnnESTyk9xSK2wTBEPUep1uwBqwiPdKYm/GA3hWaIcEQ1bx1X4j4paBp0t4vLAwdMgrBlcOwbwpyZcfB0OE1jX1yDAFth44AFDRtWBx5U0gYUnIMTX4BMIkFwiCp3xwMY14TKdOQYEL5JgCSCkZB04Wxh4VBl2KIaoO+GUQiowEpSAxrDoZGr8mUUwimIznp9CIiNRkShn4VDB4GOm7pCU5BaLhwMHhNZkYFQwAdqYeAQVQMIWHoVcHgX0eGURmI8Oc9QsIQU8AQFSRDIjLN0NybyqfaG2QY+NWRE9RrOlUo+NeR4m5Cr86PtElmZLjT1uFgGFTD4NeOHBdlrdXDs828N4SDoVUNQ4MPBCACBVmfsU6ROu3nvCEcDN1qGHzqyOP8bKWx5zmTByC8SY9wMDQoYfA71s57zZWAAycF4WAQzMbWYPA3682dfjR4ITjjZo07RR4KhlE1Cn51JHf+kdfSOTOsIBxTMhQMI6oY/OlIXpYEVil/ogqfmAwFg5qG9Ksjh3k5Ek0xchtSCn08FAyKGtKnHcm1pEWBhniB0L4lHAyKGtKnHdnCyZC4hfHsSdyCCgODqob0qSPxpRTZuugJTih8CSYMDKoakmDgWrMC4ZnHEhcGjnYYQB8OA8O4MoaoHx3JwyBZceascOGdbBgYkh4wSCbKMenmYJDpGXRswVnZDQNDFMOAq00/TgO82pCRhMN0Cm+tPgQMQyiFdrSOaL1eYmbCm5qXuR/UKckkvwxCwNCD5BdiQDH4WCvPcDDgFoBDemueFo5nQsCALVhBlxBHOXiJmQnPvYU7sLLF0g56t8xbMgQM2IIVFNUxFIOCs4FLuE4N8mF7u6Hp6ZZO+TtCwIAtWIHpnkcxeHdYbORhSHiOiishYEBzS1piF/oDbr4IhTfQFi9LepLgGNAFK6iwjegPPtLOnUySe7GoSnAM6IIVjQB1gPGhI7mL2eFVh+AYsAUr1i/ilgN/yognfMcvfx6ciATH0IxhoBoAnY3xoSP5U2reHRA4EhwDmleqxNHVC7nVUy98F+mAHjS2BMaALlgx5TUclo4UuMD5cuitl8AY8CJnFgs+uvKRSoFvrG9P9xoJjAFTAFZ41BPIh44ULkx6N0sRCYwBm461JplQvzA/OnJMgCGQS1U1FwExYPMK1nAa9RL0Y0fWDhbd4mMqxy1BMaDTsdaMCDYE96Uj+fPtVHw0M5cExYBOx1rttTM0HSnZURNYTwbFgE7H2sHRmTh/Sk2IgbMWpS5BMWAGc7XaN4majDdpFXPwYZQ5JSgGbDq2qgTbw5qPjEjdwOKe3bydEhAD2vqrXSK65cbPfGREwYM+iAEREAPeF9gJQs1pfzpSwTkywE7cgBjEGpJnTvvs6HnrNrb4VxABMYg1JM+c9jtNIPUfV9plh0lADNgEk7NQcHPatw+53HXax9ZJkGAY8AUrx+A3gT7gZ12bSod0g7pPCyIYBlxDOtZY8S1Y/n3IO6UY/O33DIYB15AODYhvyAswGFLYZeNHQQTDgE+6Op/AZ6d92ZFMOuXtwocFEQwDakPWrC3ioBT3j6NyQmGbtueuKBAG3IasaZx4swm2wKCw1carj1UgDPgou2aWFFWiAXQkFb4vsC0eFWWg3TX4QkTNkhpnyiHgspvCIQ7ezosoB8GArdS4Sxqfcgh6yInUrtY0Q2E935LfLATBoDJ+RD1ogy838XxGnaLeYfw2CAZ8pca1gNKNV4d/85JnTFSOeFGdm3tjfsk/hlv4uMk1X/7mNuoGcvt9j9muE5VNiYqW9e/8Y7j11ixKoUY1vX3nxszMzN26B7VKKfuOn7w7ReVUCyUD5Z3SBscmk4W88NYZlIJj9PjunRsTTGa2HY/S6D8sZbO/C4KASr8CB4UdHL8vcjSDDMNrb525xznEhFpGb9+5/96EJaQ6zDhijhr6wu35bDZwo4ionXijS5TxhQ8+xEItLMkwPHn9zJkHiOJj4bf//T0ngI8e3t02ouWFpcrG7Z3d4nwJZD5b/I8QKCiec8Jd3Luwd+Xs1NTcrOv58tJGkSSyLJzNeo1AuOfQeg6C23fPkYzXACDd90JlF3JOZDq7ev7qapa0h3AgRIbaBHvszDxV0D7pwidn56YIgrm5e04K+kLlNimp+dX95dx6WRvCCdy6QhicgYBVAPGFysbObrZ4fn/GknMPHwEAIHA7SwHMA4DlwuTkZOHjd0Jg0NjWOp7GzoqsEWNhY/70f9YjgDoABE4tztrDk2h5qbIDBOaL56/mqGzWhXxy64PX3zoDcu8BCckIGKT2sIL+dH+5kFv/w8yEBYDEWnleZHUACOQIgMm1zYsrwXL/5MLe3ifX25ukY22SNPL+S6enp10UnnxiIlh8ELdiIaVl5qO4um8iyOXWDlwEaBUAALNxa4xLKo+ZSxJyuUAYHD7e0s1fo9rCLiMAZJdDIfDkFq3FpPzQXOvl8sLC0lKlsvGcaKD5S6dPl0rTIFlnJBeuzAECRyWI0vpKEluE2moRKGw+u+wI9toeqwL3Fh/E7EF+3Ko8pJSBAEPAfja1xdKl+SyrXCEQIABoJZ6aWpx1zDREdVC7RO8StXuJZBsyXjLzziRbXF39tJYB0QQPqpHoSztAwAkg50qtTeCBRQ7mU0wCFF3BkqdGlYCJYYciyE2uPQtAoBEU+dypKVqJqwVI6/sOK/CabJsCqYOMQQlctFkCg3sParRJdLeUXa0hcOBK7es1BOzsEXVXZDUAKgGT888rC2W7rVqdR/sf//jDixcf/Mn3AIqUHQVANZmdfKOyM32J1nfS7VSLfXWV5Pz8VSI094W1tc3NZwfVer13dmpuarZu0spYrzaCg2tIIs7YVafWAr5qE9h8dvHg8sq1yPugAUql4s5GZWmhbL9pjgpk4+zZs1eufLK3d+vChSdP1KlcMSGQluDQhxVQelaZQ6Gb+WYZpynCXnF2ClUpTxmGz/7w+csvsDT8eb6487xC8qVXCQKGQo4yWC/Yle3yZGH56v7++fOrnzLLyOShG8bs7Ozi4uKpKpAps3QpGELmwmuiNegnZ69fv95e1ycu7ECNJ5nP2RmXM/1qt0Jkgwr5sLS0tLBQLut6+fHV21+apt57N+7fefdtVzii4aapyintOsr56SHB8PWLVyQzkJW9vf5Ds22YtWSZMlldLRazxd3bG5UtaFXEeiZIHiwClKm5qkBV2eOnndZ64PqccrXqxGSucPj1Dy++P/vJnnKTez8L9ccpLG9EzWe/+ebb7777zrT4wPi7cf/zOy/f/YmF/MtVKOLVYnaeJqZ0ugTZWlrdSbyyC/YUrbivvn/xw9cOHJNUrMazXjh8/HSr7GyXUcPQDV3XYwTN3NyVJ2jKb26S12fNRNMUlCjYD9+8PvXXv7K3E5mD0riAR+GUZRBQHpCt85AzKCuSOwKCCPk4/7ft7UeP7j788dzPjAjUj/v3P5s080OLmIQjREvTNE3Fv//jzeuvppzFWsVR2FxbW7NpEDHV0OHjx1vVMrWRzC6eOnsLobDGYsiRtJvFwXiw9/8zf/2VXRY2D9LOiP6pO7gLetxX35vygsoPhzmrtEjuzq8WCY3551VFr28/uvsj0JiY+a+DZyRHOTs7VAuQAFYJzZMSjZu1/dUpm8eValauraxcPrj4bJNEUzBxrBceP60ZmoLCnl38BC3CaysQmgamOG0kVEmWpos7f//HPxNuIKegklINRGXO/MYl30/WSG55f7VU0aqJoj3J9t2PZmoTs7lmlW8O6gYpHBKqpvchCmDxFUGBlC2RxpWDZxQGsbYe1w9M478XV2orERaSZQsJU2HZXQLkzSoRnlSV9akTNxsbG0lJXT6wMlfY0uoThowxr12GwsmZCbm6WjvjwGjos9+LcnOwSVrZlqs6EHNg3sNc1DVnHaupJaDCiiYR0MiLD2YfzDKJEWVEVBIIlNfidXesl9c+W0Aw8BcSzILNrbvpsZBlcSY+f14dpFMEC5WdEmmaPoedtDhpy3HpktO7Fc7aA5Gl4rSL+093JmYeuYqHGNuX9iX9cWPm1QM3BpKppU9L/Ax98fLzc9sOq5RNRVBtHcZcVKNdTyiSZdDLW8hCH0Ag4mRwg+jDj6LO8lmowNBxP5cTvvIJsU91d6MoPyflur98EXn+zo33SNf80bbTLtXKl0psIP7xf4dAoVZWDjZzoJbXH9dBKNFO8qsaBhMPnUlbem5OveQEGJ7s0YFK7aZb0sCLZMixD2MULNCdiYlzumvmTjP2iTVcmKyf3whHVjZvf0Y0EQbBpvA2KZ1zd6mZV01XxURA8sJrFHtswGe4xhu3L5WK51lYfFT5VTF7e8HNobCOzvKEI29/PjHzZaHGTJk3Ibx/03rop2+/qVAl5UzWljXqPOBGfv36ou4KBiE/s0asazfxcJvESintuBwitK2/TcxMhJ3/L17euU8b4czPj2pbRHkH7GendnyDGE6l3Y0FZ7enba2DHL7gm6dvTM9P7yzpLg6abg5aC5wJhpXCJFgNV6+65vVJNNs/vgyXQiRynw2XHiJ9xf+Q8cN7Pzkz9DE1CavGE02VUd4iRtAcn8NXYNiWdisu1VA+BICYdqRy82CzALZrruB2kNFUtt57lZ9ufPvtN9iC3Dk2c37H8ewYKZ3zxflLbutW0xfnzvJfcY0Y4QTfpbKro4jq5bLQ2WblGQy3DuschbSNrOeDjCWyAp3w9C5SG8BAJiRqMgQ9bG6/jPT/dVaWQzahU95fxYwuzRBvfPpf4OAOVympmw1dqWPtcheRZ7mr0BPPX0JX5Yzth3Xq6ObBOrLiLPFjJTU8t8450UUU7s7Ml8uP3dpBP50tKtWGwby5OCNz6FkhySvAyDG7gWEAEr9xh/m/x5hNXJD1Ytfn0PV6Y/crQaAJsFjdlWFjviglEIm0DjgG6XJX+WsX12D24xBf0TDqzNZedOfc01zumfA1Z+fuoZVhN7vMD0hMlZ/r1/jns9wApjRmXB5aajr18iYhgXoPbmSLtRjwI5u0QwmGC1O4c0O5tJyb5I5GXk7M1OuhckmiGDqQHdqKN3eRGuG2panMF11eBfhFAoBBuMLwClUMJE/LQn7n6ihEtaXpPwuzgjoxKB5nspk7xGqDMe/2reC4dj8Wj6yGOUcCghW1LgiHKePKtFA/4r7iii74a2hd0PT65V0cw9a6UEXyzlPWooeHT7u7x8fHU6lEIpHPZzKZlpbW1pERuEStC93OvfFbYU44HpBql8q8wAMjPrr4vRJa7i+i6Lln4eGvtQULsSDOCScmtW1VnMDIzj/Uw1PmxSq/mkRVpBvNOTlR8oHl+UYh/vv4+aeSvToKV5OoYpAd88erWCrb9HmutIjbqC8MoVGQ+5DzvOVVPP14YZFFQz8Y8N2V/jDIHHq5TuIKm3B5QZFH/WBQO3hfDYOfQx+pyHfv8dxHsRO3ORiEJ+rxD03lpZkfQFa5+S6gQzIMPNWAqVc/GHiHpmpaunX45Mnjo51EhobIX6PHTw4Oto10cy/Ek6t8LgbpxhHeZiQsIAeD8HwMnoNsjL+DAT0tkAaSZYbv+SjpZLiu5dheDg4GoebiUBC6J+ObjWTAI8KNE0PCgNwdWRg+HxjQAxCjstEv55x6qT3IPS1ScjIe/1ILbHjKwSDaL4pXcOn2Kc5Rw9Jd9gJ/YMEI6yQ/FPa4DwwD6NhAOhWCnuyhsBdRtH2Ey2GI32mh3H1gwDfVSE8qwdtSVH6vnGj7qYFfcTAoGOShs+c+MOAh5PuNORikRw1wLSgq2D4ivl7QONf5cTAIRi74LX8K29zwm9AU9kMJMWiGuwD6hK71uLnBwSCY7ONoSGlmOPfiKZxEIr0R9FhVPY/mJVuXcU3OwSC4VQTXkAq7rvGbtlWmmWUYiOjJY+3txxrkWwzwN3AwCE6yxjWkwnl3nBvhFCbUVPaeKgpHhXnHgAdQmRXjWA4K+7UDXhdcFV7V42Dgjw44GlLlkD70aLS6bbyYCK578ya8cYhnDL41JM+eVjpjQNxpKovgBkSPGHANqTRFik/XqO2EDuHKYE1weL9nDLiGVNoEzLnxSO2yK4UjXaTCV2AcDEPcAH5tSBoWD6x02ZVgrKQqgtbnFUObd+Nb+jK1Q8G6glIQmTaclHH7cvym6CCHoCgfChbw+uSoyD7xigG/gkQxI5x7wNTPHAsiwjNOvGLAL6RRPOuOpyNVT4pWOamAI5KTXjgYuIsh+OOqx00FvexqVOHoK1TiklkNjxg4x4GqnvEWSEdSkW7RR0U64vGIgTNKVM0EvtDj6dJU3i1XIpEfdeMRA35UsPJRU7iO5F1gi8uQ9A55r1Uh4hkDfnC08onJPB2pGp5Jn8KhcLY0KzVYjiscT6OgE2kezj7HF7zEnRkiI6ogGhSPp8ftAG4tRY/Q9eD6jR6q6uekvH6FY+Gi3crXl+OH/HGPbENUpLcLAbDq5PMGmlYhiWivp9N1kXSJijdmdv1a9V9vp/0113kLq1xex5G2RBprHkY67/mY1voJLl1kfbsvzBjw2q4zroQb3QG3EQz2ZFLtA+kkkfRAd6LV5yHsebZN0xbZwoGjF+lQ808UxHAkR3IkR3IkR3IkRxKG9DWDcUU/9hJjswmM9lhMbwQTLA5Lfj0x+4GWOPlIv9PjzlmcDtiq1gAWVTJGRWcmqx6L069gujoePxaJmaK3Duvmp8iQHo/HYw3jzMxJx2Nx5oRwEuZ+0kMQiflo2wgkqCmmw5JLl65nrJ90y0BuIV9Qs5QkPR5rTrdEIsN28KFIJwwM0qglas7AwoDDNDz76Bp/I/V4aLcXuiEnKfvZ1lrvpqgd0jJe2eKQBotluhVnQ9V3IGMfSVrd2TNkhmALbNaC6lg1UH8LOLM3sIFFHuZ5rF8sDNT4Bqdbaxky6Tj7dMi6AB6zRuHMTZhi6aEzTkmdZtiJARDAAxl6NaDeRJ+txQAOww0GDRk3T7l0YeiGz0kTF8yLQuoMOuwFDPR7WJMbM7POvNnhT7uZV1jIboWH2tkmMPLPyUYrEgsDXXzMODBo/cPsX8PQxuAOt2QUdQTvpCltgd/SdN1Nh2JxYOiiuctDJlrpKm03bJypxRCnBUQLNF4zhLMxxBiGCD2OHxpPl33naid1BMiz+tZP/sMG07RGjZrLPwZzpqK1IcM27pAmQ6HV5CYKodsZhnFKJWUngyakK3ICXVHqolkbhjQ20wSm4W8HBpbhYchJgpZqj0kk7Xw7TKTR8PGaqxJtDCQ6E0MTq7VuDKw4aB5ZebL/m0vQBlsAoRjMkAbJTYcLQyMN3cAwdNMLPnvZ11qVhhsdlX6aiKF8psfEMFCPYYCeLhyD/+MY2OPNUIwoBoO1YxGGIZY6UtV66FsauRiGmBsJROfGQDIzwn5lGFKspTkwkJraksHWmjX7XqIYxZBPJwedGFpCwBBrJqUixQCTcUnNGKUPmvV9IJ12Y2CRHoe0uDGQ30/q9CsbQ7cDQ7Ngf0jSXneMVfdHaVZcfjAM1vwAGOIpklMxhlGqP0h+oTsxIq5mX4MhBq/ogabjxkDqEuSnzdEo8g4MGY0/ewWN0hiqx9De3t3gD0Nrf1dfYw0GnQSvx2Ckk8m0iWE0za5nhsZsQCABhgFoYnl4GWAgkTRYhxgmSY1qpz5HUIJjbQbT1xYGSByXAyxZRjvrMDDxgwGkoxYD+TASdWOg3WB1RzAsdAxD8TVBuxJgSIH+74Xu37qncMx+rBmKfLzaYVKnDhtDI6xK8ib4IUXRjn8thiat18AwaFUM0IpbobR6IfUCDCOmEVW9rrHDTscA7P1K2hiMvhoMkTFD41/R1sU69loMbcOD3f4wdKdS465GQYLqdRiquiF6DAylBG3Mx1mfL8AwCEGh4N26YRiqSSe1C0gcsQG4fKezBgPjwJvT7KGMGIZUssHqKXyqyHrzSWcmrUhFttKSSMPzfRC3iYG0/DoMVIfSVLkwtFpWnGU+JWtVJMiQhnYXx1tbh+nre00Mlt3QEWJPwcxzhQ5TJxVjIA3laWJA7Ab6v5PUPnRhIHUpOTBgQApYT5FgWbYwjIz0UVaIFdlKnx+BNAbCEJFgSEowsKTaOsnCYGAYSFwJqupcGOyFpRETQ6bGimykABprw5gyQp+nuaLZgLgGnRhYhvvB5s5TuPQLzJimlhMPQ0YFQ9VN97ht+UbrMZA+sYlu5nJhsJdmUiiGCKsHKIZR2Dsz1AxBST1IjrVZpWJhIAqJ5C4NCeiDZzuaoNkRDMn+vr4+ZjE2wUv7aEgehtF6DDGIoM/EQB8dYbty0lCeBujMDDOqXBgyZh9DMbRBJB3m2xpYwaZxDNSm78a9eGM2f6sPS9ZgsBn3V51Hj9sXTbMq0VINycMAacA6TM2JIcV6s24oFGu3b74eAw2rRxz3G9Nh/XGW6bbqKNCFYdwZZX11sH5ibzY6LAwpGotZU8cj9vUtmWrGTeeOtB1Sr8dg0GwOmDfcNLOs2lu7rbEl/J1muc1QvDGLLPvR/AFeeML6oRbDiHkajQmUzRglHRjM6+s4/quJdLqbVe629vQA9cRNJFJE9fcnEtT0zKfT7cyiGINnIZvDiTxIwjJN+6yQmURqqBp1Kp+Ar+CXtkSCmnQtiRQk+jicxwIS6Ugl8mZA8hst1kQC2kbrsXSvGX8+kYLOvi3FXghh4UOjGQn9MdKfSg2aiYekE9idLGp4jMUDUaq7iRzJkRzJkRzJkRwJkf8HRkT/IIcXMc0AAAAASUVORK5CYII=" alt="sia_logo"/>
                <div className="errors">
                    <p>{this.handleErrors()}</p>
                </div>
                <div className="sign-in-form">
                    <label>
                        Email:
                        <br/>                        
                        <input 
                            onChange={(e)=>{ return handleChange(this, e, "email") }} 
                            type="text"
                            value={this.state.email}
                        />
                    </label>
                    <br/>   
                    <label>
                        Password:
                        <br/>
                        <input 
                            onChange={(e)=>{ return handleChange(this, e, "password") }}
                            type="password"
                            value={this.state.password}
                        />
                    </label>
                </div>
                <button className={this.checkInput()} onClick={() => { this.handleSubmit()}}>
                    Log me in!
                </button>
            </div>
        )
    }
}

const msp = (state)=>{
    let users = state.entities.users;
    let user_id = state.session.id;
    let isAdmin = users[user_id] ? users[user_id].is_admin : false;
    return({
        loginErrors: state.errors[0],
        userId: state.session.id,
        isAdmin: isAdmin
    })
}

const mdp = (dispatch)=>{
    return({
        login: (userInfo)=>{dispatch(thunkLogin(userInfo))}
    })
}

export default connect(msp,mdp)(SignIn);