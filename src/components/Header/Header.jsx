import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import './Header.css'
function
  App() {
  const [dj, setDj] = useState('+');
  const [he, setHe] = useState('-')
  function onclick(id) {
    if (dj === '+') setDj('-')
    else setDj('+')

  }
  return (
    <div>
      <div className='bg-white-500  m-4 my-2 p-3'>

        <div className='md:flex gap-4'>
          <div className='Main_icon main_menu flex '>
            <a href="/">
              <img className=' m-x pl-1  h-10 w-auto ' src="https://cimg.co/p/crypto-news-logo-full.svg" alt="Crypto News" />
            </a>

            <div className='main_menu md:flex  ml-16 my-2 hidden md:visible '>
              <div className="dropdown">
                <button className="dropbtn" onClick={onclick}>All{dj}</button>
                <div className="dropdown-conten">
                  <div className=''>
                    <ul className="md:flex w">
                      <li>
                        <ul class="sub-menu">

                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/bitcoin-news/">Bitcoin News</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/ethereum-news/">Ethereum News</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/nft-news/">NFT News</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/defi-news/">DeFi News</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/altcoin-news/">Altcoin News</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/blockchain-news/">Blockchain News</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/press-releases/">Press Releases</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/sponsored/">Sponsored</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/cryptonews-deals/">Cryptonews Deals</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/industry-talk/">Industry Talk</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/ico-news/">ICO news</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/finance-news/">Finance News</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/technology-news/">Technology News</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/price-predictions/">Price Predictions</a></li>
                        </ul>
                      </li>
                      <li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="/exclusives/">Exclusives<span class="menu_icon"></span></a><span class="menu_icon mob"></span>
                        <ul class="sub-menu">
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/exclusives/features/">Features</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/exclusives/opinions/">Opinions</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/exclusives/people/">People In Crypto</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/exclusives/podcast/">Podcast</a></li>
                        </ul>
                      </li>
                      <li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="/videos/">Videos<span class="menu_icon"></span></a><span class="menu_icon mob"></span>
                        <ul class="sub-menu">
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/bitcoin/">Bitcoin Videos</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/ethereum/">Ethereum Videos</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/defi-videos/">DeFi Videos</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/altcoin/">Altcoin Videos</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/blockchain/">Blockchain Videos</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/market/">Market Videos</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/cryptosecurity/">Security Videos</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/trading/">Trading Videos</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/icos/">ICO Videos</a></li>
                        </ul>
                      </li>
                      <li class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a href="/guides/">Guides<span class="menu_icon"></span></a><span class="menu_icon mob"></span>
                        <ul class="sub-menu">
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/bitcoin/">Bitcoin</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/ethereum/">Ethereum</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/nft/">NFT</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/defi-guides/">Defi Guides</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/altcoins/">Altcoins</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/blockchain/">Blockchain</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/cryptocurrency/">Cryptocurrency</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/deals/">Deals</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/icos/">ICOs / STOs / IEOs</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/trading-tools/">Trading Tools</a></li>
                          <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/wallet-guides/">Wallet Guides</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <span className='py-1'><FiMenu /></span>

            </div>
          </div>


          <div className='md:flex m-2.5 gap-6  text-sm'>
            <div id='1' className='dropdown'  >
              <button className="dropbtn" onClick={onclick}>News{dj}</button>
              <div className="dropdown-content">
                <ul class="sub-menu">

                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/bitcoin-news/">Bitcoin News</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/ethereum-news/">Ethereum News</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/nft-news/">NFT News</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/defi-news/">DeFi News</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/altcoin-news/">Altcoin News</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/blockchain-news/">Blockchain News</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/press-releases/">Press Releases</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/sponsored/">Sponsored</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/cryptonews-deals/">Cryptonews Deals</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/industry-talk/">Industry Talk</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/ico-news/">ICO news</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/finance-news/">Finance News</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/technology-news/">Technology News</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/news/price-predictions/">Price Predictions</a></li>

                </ul>
              </div>
            </div>


            <div id='1' className='dropdown' onClick={onclick} >
              <button className="dropbtn">Exclusive{dj}</button>
              <div className="dropdown-content">
                <ul class="sub-menu">
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/exclusives/features/">Features</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/exclusives/opinions/">Opinions</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/exclusives/people/">People In Crypto</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/exclusives/podcast/">Podcast</a></li>

                </ul>
              </div>
            </div>



            <div id='2' className='dropdown' onClick={onclick}>
              <button className="dropbtn">Videos{dj}</button>
              <div className='dropdown-content'>
                <ul className='sub-menu'>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/bitcoin/">Bitcoin Videos</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/ethereum/">Ethereum Videos</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/defi-videos/">DeFi Videos</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/altcoin/">Altcoin Videos</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/blockchain/">Blockchain Videos</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/market/">Market Videos</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/cryptosecurity/">Security Videos</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/trading/">Trading Videos</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/video_categories/icos/">ICO Videos</a></li>
                </ul>

              </div>
            </div>





            <div id='3' className='dropdown' onClick={onclick}>
              <button className="dropbtn">Guides{dj}</button>
              <div className="dropdown-content">
                <ul className="sub-menu">
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/bitcoin/">Bitcoin</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/ethereum/">Ethereum</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/nft/">NFT</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/defi-guides/">Defi Guides</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/altcoins/">Altcoins</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/blockchain/">Blockchain</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/cryptocurrency/">Cryptocurrency</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/deals/">Deals</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/icos/">ICOs / STOs / IEOs</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/trading-tools/">Trading Tools</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/guide_categories/wallet-guides/">Wallet Guides</a></li>
                </ul>
              </div>
            </div>

            <div id='4' className='cursor-pointer' onClick={onclick}>Exchange</div>
            <div id='5' className='cursor-pointer' onClick={onclick}>Poscast</div>
            <div className="dropdown">
              <button className="dropbtn" onClick={onclick} >Tools{dj}</button>
              <div className="dropdown-content">
                <ul className="sub-menu">
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/price-tracker/">Price Tracker</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="/coins/">Market Cap</a></li>

                </ul>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropbtn" onclick={onclick} >Recommended{dj}</button>
              <div className="dropdown-content">
                <ul className="sub-menu">
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://cryptonews.com/news/best-crypto-to-buy.htm">Best Crypto to Buy Now</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://cryptonews.com/news/best-crypto-presales.htm">Best Crypto Presales to Invest in</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://cryptonews.com/news/new-cryptocurrency.htm">New Cryptocurrency</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://cryptonews.com/news/next-cryptocurrency-to-explode.htm">Next Cryptocurrency to Explode</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://cryptonews.com/news/best-crypto-icos.htm">Best Crypto ICOs</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://cryptonews.com/news/crypto-launches.htm">Crypto Launches</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://cryptonews.com/news/best-bitcoin-betting-sites.htm">Crypto Betting</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://cryptonews.com/news/best-bitcoin-casinos.htm">Bitcoin Casinos</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://cryptonews.com/news/best-bitcoin-gambling-sites.htm">Bitcoin Gambling Sites</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://cryptonews.com/news/best-bitcoin-blackjack-sites.htm">Bitcoin Blackjack</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://cryptonews.com/news/best-bitcoin-slots-sites.htm">Best Bitcoin Slots</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://cryptonews.com/news/best-crash-gambling-sites.htm">Crash Gambling Games</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://cryptonews.com/news/best-anonymous-casinos.htm">Anonymous Casinos</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://cryptonews.com/news/non-gamstop-casinos-uk.htm">Best Casinos Not on Gamstop</a></li>
                  <li class=" menu-item menu-item-type-post_type menu-item-object-post"><a href="https://cryptonews.com/news/best-instant-withdrawal-bitcoin-casinos.htm">Fastest Payout Online Casino</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://cryptonews.com/news/best-telegram-casinos.htm">Best Telegram Casinos</a></li>
                  <li class=" menu-item menu-item-type-custom menu-item-object-custom"><a href="https://cryptonews.com/news/casino-utan-svensk-licens.htm">Casino Utan Svensk Licens</a></li>
                </ul>
              </div>
            </div>


            <input type="text" name='hello' placeholder='hat you searching for' />


            <div class="dropdown">
              <button class="dropbtn">US+</button>
              <div className="dropdown-content1">
                <div class="header-lang__dropdown">
                  <a href="//cryptonews.com" class="">
                    English                    </a>
                  <a href="//de.cryptonews.com" class="">
                    Deutsch                    </a>
                  <a href="//fr.cryptonews.com" class="">
                    Français                    </a>
                  <a href="//ru.cryptonews.com" class="">
                    Русский                    </a>
                  <a href="//tr.cryptonews.com" class="">
                    Türkçe                    </a>
                  <a href="//jp.cryptonews.com" class="">
                    日本語                    </a>
                  <a href="//nl.cryptonews.com" class="">
                    Nederlands                    </a>
                  <a href="//it.cryptonews.com" class="">
                    Italiano                    </a>
                  <a href="//ar.cryptonews.com" class="">
                    العربية                    </a>
                  <a href="//fa.cryptonews.com" class="">
                    فارسی                    </a>
                  <a href="//cn.cryptonews.com" class="">
                    中文                    </a>
                  <a href="//es.cryptonews.com" class="">
                    Español                    </a>
                  <a href="//pt.cryptonews.com" class="">
                    Português                    </a>
                  <a href="//se.cryptonews.com" class="">
                    Svenska                    </a>
                  <a href="//dk.cryptonews.com" class="">
                    Dansk                    </a>
                  <a href="//no.cryptonews.com" class="">
                    Norsk Bokmål                    </a>
                  <a href="//fi.cryptonews.com" class="">
                    Suomi                    </a>
                  <a href="//kr.cryptonews.com" class="">
                    한국어                    </a>
                  <a href="//id.cryptonews.com" class="">
                    Indonesia                    </a>
                </div>
              </div>

            </div>

          </div>

        </div>





        <hr className="h-px my-4 bg-gray-100 border-0 dark:bg-gray-300 bold"></hr>


      </div>


    </div>
  )
}

export default App
