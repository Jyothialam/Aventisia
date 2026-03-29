import React from 'react';
import { Plus, Search, MoreVertical, Calendar } from 'lucide-react';
import KnowledgeCard from './KnowledgeCard';

const KnowledgeBase = ({ onCreateNew }) => {
  const mockCards = Array(6).fill({
    title: 'Test',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
    createdOn: '14/07/2025'
  });

  return (
    <div className="flex-1 flex flex-col min-h-0 p-6 pt-5">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-800 tracking-tight">Knowledge Base</h1>
        
        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <button 
            onClick={onCreateNew}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm hover:translate-y-[-1px] active:translate-y-0 cursor-pointer"
          >
            <Plus size={14} />
            <span>Create New</span>
          </button>
        </div>
      </div>

      {/* Grid Parent Border Wrapper */}
      <div className="flex-1 bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col min-h-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-hidden flex-1 content-start">
          {mockCards.map((card, idx) => (
            <KnowledgeCard key={idx} {...card} />
          ))}
        </div>
      </div>

      {/* Footer / Pagination */}
      <div className="sticky bottom-0 pt-3 flex items-center justify-between border-t border-gray-200 text-[12px] text-gray-500 pb-2">
        <div className="px-1">{mockCards.length} rows</div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span>Rows per page</span>
            <select className="bg-white border rounded px-1.5 py-0.5 outline-none text-[11px]">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-600">page 1 of 1</span>
            <div className="flex items-center gap-1">
              <button disabled className="p-1 hover:bg-gray-200 rounded transition opacity-30 cursor-not-allowed">
                &laquo;
              </button>
              <button disabled className="p-1 hover:bg-gray-200 rounded transition opacity-30 cursor-not-allowed">
                &lt;
              </button>
              <button disabled className="p-1 hover:bg-gray-200 rounded transition opacity-30 cursor-not-allowed">
                &gt;
              </button>
              <button disabled className="p-1 hover:bg-gray-200 rounded transition opacity-30 cursor-not-allowed">
                &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
