import { Card } from "../Card/Card"

import Snappy from '../../assets/images/icon-snappy-process.svg'
import People from '../../assets/images/icon-people-first.svg'
import Affordable from '../../assets/images/icon-affordable-prices.svg'
import Forma from '../../assets/images/bg-pattern-intro-left-desktop.svg'

import * as S from './style'
import { Banner } from "../Banner/Banner"

export const Content = () =>{
    return(
        <>
        <S.Form>
            <div className="form">
                <img src={Forma} alt="" />
            </div>
        </S.Form>
        <S.Content>
                <h1>We're different</h1>

                <div className="cards">
                    <Card img={Snappy} title='Snappy Process' text="Our application process can be completed in minutes,not hours.Don't get stuck filing in tedious forms. "/>
                    <Card img={Affordable} title='Affordable Prices' text="We don't want you worrying about high monthly costs.Our prices may be low,but we still offer the best coverage possible."/>
                    <Card img={People} title='People First' text="Our plans aren't full of conditions and clauses to prevent payouts.We make sure you're covered when you need it."/>
                </div>
        </S.Content>
        <S.Banner>
            <Banner/>
        </S.Banner>
        </>
    )
}