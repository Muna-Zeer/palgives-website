import { notFound } from 'next/navigation';
import { programs } from '@/data/programs';
import ProgramDetailsCard from '@/components/ProgramDetailsCard';

interface ProgramPageDrops{
    params:Promise<{slug:string}>
    
}
export default async function ProgramPage({params}:ProgramPageDrops){
    const {slug} = await params;
    const program = programs.find((p)=>p.slug === slug);

    if(!program){
        notFound();
    }
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
      <ProgramDetailsCard program={program} />
    </div>
    );
}