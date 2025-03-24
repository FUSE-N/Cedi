import React, { useState } from 'react';

const CediWeb3App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock connection to wallet
  const connectWallet = () => {
    setIsConnected(true);
    setAccount('0x742d35Cc6634C0532925a3b844Bc454e4438f44e');
    setBalance('1.245 ETH');
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAccount('');
    setBalance('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Cedi</div>
          <div className="flex space-x-4">
            {isConnected ? (
              <div className="flex items-center space-x-4">
                <div className="bg-blue-900 rounded-lg px-3 py-1 text-sm">
                  <span className="text-gray-300 mr-2">Balance:</span>
                  <span className="text-blue-300">{balance}</span>
                </div>
                <div className="bg-purple-900 rounded-lg px-3 py-1 text-sm">
                  <span className="text-gray-300 mr-2">Account:</span>
                  <span className="text-purple-300">{account.substring(0, 6)}...{account.substring(38)}</span>
                </div>
                <button 
                  onClick={disconnectWallet}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button 
                onClick={connectWallet}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {!isConnected ? (
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-6">Welcome to Cedi</h1>
            <p className="text-xl text-gray-400 mb-8">The next generation decentralized finance platform</p>
            <button 
              onClick={connectWallet}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition-colors duration-200"
            >
              Connect Wallet
            </button>
          </div>
        ) : (
          <div>
            {/* Tabs */}
            <div className="flex border-b border-gray-700 mb-6">
              <button 
                className={`px-4 py-2 mr-2 ${activeTab === 'dashboard' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400'}`}
                onClick={() => setActiveTab('dashboard')}
              >
                Dashboard
              </button>
              <button 
                className={`px-4 py-2 mr-2 ${activeTab === 'swap' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400'}`}
                onClick={() => setActiveTab('swap')}
              >
                Swap
              </button>
              <button 
                className={`px-4 py-2 mr-2 ${activeTab === 'stake' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400'}`}
                onClick={() => setActiveTab('stake')}
              >
                Stake
              </button>
              <button 
                className={`px-4 py-2 mr-2 ${activeTab === 'nfts' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400'}`}
                onClick={() => setActiveTab('nfts')}
              >
                NFTs
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'dashboard' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Your Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Portfolio Overview</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>ETH</span>
                        <span className="text-green-400">1.245 ETH</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>USDC</span>
                        <span className="text-green-400">3,240.50 USDC</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>LINK</span>
                        <span className="text-green-400">45.32 LINK</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-400">Swap ETH for USDC</span>
                        <span className="text-gray-400 text-sm">2 hours ago</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-400">Staked 0.5 ETH</span>
                        <span className="text-gray-400 text-sm">1 day ago</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-400">Received 25 LINK</span>
                        <span className="text-gray-400 text-sm">3 days ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'swap' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Swap Tokens</h2>
                <div className="bg-gray-800 rounded-lg p-6 max-w-md mx-auto">
                  <div className="mb-4">
                    <label className="block text-gray-400 mb-2">From</label>
                    <div className="flex items-center bg-gray-700 rounded-lg p-3">
                      <input type="text" placeholder="0.0" className="bg-transparent flex-grow text-right outline-none" />
                      <select className="bg-gray-600 ml-2 p-2 rounded">
                        <option>ETH</option>
                        <option>USDC</option>
                        <option>LINK</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-center my-4">
                    <button className="bg-gray-700 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-400 mb-2">To</label>
                    <div className="flex items-center bg-gray-700 rounded-lg p-3">
                      <input type="text" placeholder="0.0" className="bg-transparent flex-grow text-right outline-none" />
                      <select className="bg-gray-600 ml-2 p-2 rounded">
                        <option>USDC</option>
                        <option>ETH</option>
                        <option>LINK</option>
                      </select>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors duration-200">
                    Swap
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'stake' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Stake Assets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">ETH Staking</h3>
                    <p className="text-gray-400 mb-4">Current APY: 4.5%</p>
                    <div className="flex items-center bg-gray-700 rounded-lg p-3 mb-4">
                      <input type="text" placeholder="0.0" className="bg-transparent flex-grow text-right outline-none" />
                      <span className="ml-2">ETH</span>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-200">
                      Stake ETH
                    </button>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Your Staked Assets</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Staked ETH</span>
                        <span className="text-green-400">0.5 ETH</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Rewards</span>
                        <span className="text-green-400">0.0023 ETH</span>
                      </div>
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors duration-200 mt-4">
                        Claim Rewards
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'nfts' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Your NFT Collection</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-gray-800 rounded-lg overflow-hidden">
                      <div className="bg-gray-700 h-48 flex items-center justify-center">
                        <span className="text-4xl">🖼️</span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2">Cedi Art #{item}</h3>
                        <p className="text-gray-400 text-sm mb-2">Collection: Digital Dreams</p>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-400">0.25 ETH</span>
                          <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm transition-colors duration-200">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 mt-12 py-6 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-gray-400">© 2025 Cedi. All rights reserved.</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Docs</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Community</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CediWeb3App;
