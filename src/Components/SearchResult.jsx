import React from 'react';

const SearchResult = (props) => {
    const { result } = props;
    
    return (
        result.length === 0 ? (
            <></>
        ) : (
            <div className='origin-top-right left-55 absolute w-80 border border-gray-300 rounded-md bg-white p-2 shadow-md'>
                {result.map((results, index) => (
                    <div key={results.id} className={`flex items-center p-2 hover:bg-gray-100${index !== result.length - 1 ? ' border-b border-gray-300' : ''}`}>
                      
                        <div>
                            <h3 className="text-black font-semibold text-sm">{results.title}</h3>
                            <p className="text-gray-500 text-xs">{results.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    );
        };

    export default SearchResult;
