import { Clock } from 'lucide-react'; // O cualquier librería de iconos que uses
import { INSPECTION_PROMISE } from '@/shared/utils/constants';

export const InspectionBadge = () => {
    return (
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg backdrop-blur-sm max-w-fit">
            <div className="bg-[#00D1FF]/20 p-2 rounded-full">
                <Clock className="w-5 h-5 text-[#00D1FF]" />
            </div>
            <div className="flex flex-col text-left">
        <span className="text-white font-bold text-sm leading-tight">
          {INSPECTION_PROMISE.title}
        </span>
                <span className="text-gray-400 text-[10px] uppercase tracking-wider">
          {INSPECTION_PROMISE.sub}
        </span>
            </div>
        </div>
    );
};