import React from 'react';
import SEO from '../../components/seo';
import BgShape from '../../components/common/BgShape';
import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/Blog.module.css'
import { tradingBotsData } from '../../data/tradeBots';
import FaqArea from '../../components/trading-bots/FaqArea';

const TradingBots = ({ markdown }) => {

  return (
    <>
      <SEO pageTitle={'Features'} />
      <BgShape />
      <div className={styles['container']}>
        <div className={styles['wrapper']}>
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
      <div className="container pb-100">
        <div className="row ">
          {
            tradingBotsData.map((tradingBot, index) => {
              return <div key={index} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                <div className="product__details-sidebar ml-0">
                  <div className="product__proprietor white-bg mb-30">
                    <div className="product__proprietor-head mb-25">
                      <div className="product__prorietor-info mb-20 d-flex justify-content-between">
                        <div className="product__proprietor-avater d-flex align-items-center">
                          <div className="product__proprietor-name">
                            <h5><a >Justin Case</a></h5>
                          </div>
                        </div>
                      </div>
                      <div className="product__proprietor-text">
                        <p>Jeffrey arse over tit give us a bell old posh morish wellies cheeky.</p>
                      </div>
                    </div>
                    <div className="product__proprietor-body fix">
                      <ul className="mb-10 fix">
                        <li>
                          <h6>Capital Required:</h6>
                          <span>Rs {tradingBot.capital}</span>
                        </li>
                        <li>
                          <h6>Instrument:</h6>
                          <span>16 February 2021</span>
                        </li>
                        <li>
                          <h6>Risk:</h6>
                          <span>{tradingBot.risk}</span>
                        </li>
                        <li>
                          <h6>ROI:</h6>
                          <span>{tradingBot.roi}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            })}
        </div>
      </div>
      <FaqArea />
    </>
  );
};

export default TradingBots;

export async function getStaticProps() {
  const file = fs.readFileSync('./content/tradingBots/tradingBots.md', 'utf8')
  const matterData = matter(file)
  const markdown = matterData.content

  return {
    props: { markdown }
  }
}