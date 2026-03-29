import React from 'react';
import { MoreVertical } from 'lucide-react';

const KnowledgeCard = ({ title, description, createdOn }) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200/80 hover:shadow-md hover:border-primary/40 transition-all group flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors cursor-pointer tracking-tight">{title}</h3>
        <button className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-gray-400">
          <MoreVertical size={16} />
        </button>
      </div>
      
      <p className="text-xs text-gray-500 leading-relaxed font-medium line-clamp-3">
        {description}
      </p>

      <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        <span>Created On:</span>
        <span className="text-gray-500">{createdOn}</span>
      </div>
    </div>
  );
};

export default KnowledgeCard;
