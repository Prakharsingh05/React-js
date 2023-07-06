import React, { useContext } from 'react'
import { CryptoContext } from '../context/CryptoContext'

const TableComponent = () => {

    const {test} = useContext(CryptoContext)
  return (
    <div 
    className="flex flex-col mt-9 border border-gray-100 rounded">
      
      <table className="w-full table-auto  ">

        <thead className="capitalize text-base text-gray-100 
        font-medium border-b border-gray-100
        
        ">
            <tr>
                <th className="py-1">Asset</th>
                <th className="py-1">Name</th>
                <th className="py-1">Price</th>
                <th className="py-1">Total volume</th>
                <th className="py-1">Market cap change</th>
                <th className="py-1">1 Hour</th>
                <th className="py-1">24 Hour</th>
                <th className="py-1">7 Days</th>
            </tr>
        </thead>
        <tbody>
        <tr className="text-center text-base border-b border-gray-100 hover:bg-gray-200 
        last:border-b-0
        ">
                <td className="py-4">Name</td>
                <td className="py-4">Price</td>
                <td className="py-4">Total volume</td>
                <td className="py-4">Market cap change</td>
                <td className="py-4">Asset</td>
                <td className="py-4">1 Hour</td>
                <td className="py-4">24 Hour</td>
                <td className="py-4">7 Days</td>
            </tr>
            
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
