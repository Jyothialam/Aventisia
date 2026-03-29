import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';

const CreateDrawer = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] transition-all duration-300 ${
        isVisible ? 'bg-black/40 backdrop-blur-sm' : 'bg-transparent pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div 
        className={`absolute top-0 right-0 h-full w-[400px] bg-white shadow-2xl transition-transform duration-300 flex flex-col ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-start justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-gray-800">Create New Knowledge Base</h2>
            <p className="text-xs text-gray-500 leading-tight">Best for quick answers from documents, websites and text files.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* Name Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-600 block uppercase tracking-wide">
              Name (Cannot be edited later)<span className="text-red-500 ml-0.5">*</span>
            </label>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* Description Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-600 block uppercase tracking-wide">
              Description
            </label>
            <textarea 
              rows={4}
              placeholder="Description" 
              className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
            />
          </div>

          {/* Vector Store */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-600 block uppercase tracking-wide">
              Vector Store<span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="relative group cursor-pointer">
              <select className="w-full bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-2 text-xs appearance-none outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer">
                <option>Qdrant</option>
                <option>Pinecone</option>
                <option>Weaviate</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-primary transition-colors pointer-events-none" size={14} />
            </div>
          </div>

          {/* LLM Embedding Model */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-600 block uppercase tracking-wide">
              LLM Embedding Model<span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="relative group cursor-pointer">
              <select className="w-full bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-2 text-xs appearance-none outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer">
                <option>text-embedding-ada-002</option>
                <option>text-embedding-3-small</option>
                <option>text-embedding-3-large</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-primary transition-colors pointer-events-none" size={14} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-100 flex justify-end items-center bg-gray-50/50">
          <button 
            onClick={onClose}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-xs font-bold transition-all shadow hover:translate-y-[-1px] active:translate-y-0 cursor-pointer"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateDrawer;
