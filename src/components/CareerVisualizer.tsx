import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Rocket, Target, Zap, ArrowRight, Star, Sparkles, X } from 'lucide-react';
import { useState } from 'react';

interface Milestone {
    year: string;
    role: string;
    color: string;
    icon: any;
    skills: string[];
    description: string;
    learningQueue: string[];
    status: 'completed' | 'current' | 'projected';
}

const milestones: Milestone[] = [
    {
        year: '2024-2025',
        role: 'Frontend Engineer',
        color: 'text-neon-blue',
        icon: Zap,
        skills: ['React', 'Angular', 'TS', 'Tailwind'],
        description: 'Mastering the core of modern web development and delivering scalable applications.',
        learningQueue: [],
        status: 'completed'
    },
    {
        year: '2026',
        role: 'AI + Full Stack Developer',
        color: 'text-purple-400',
        icon: Brain,
        skills: ['LLMs', 'RAG Pipelines', 'Python', 'LangChain'],
        description: 'Building intelligent applications that bridge the gap between deterministic code and probabilistic AI models.',
        learningQueue: ['Advanced RAG', 'Agentic Workflows', 'Model Fine-tuning'],
        status: 'current'
    },
    {
        year: '2027+',
        role: 'AI Product Architect',
        color: 'text-green-400',
        icon: Rocket,
        skills: ['Multi-Agent Systems', 'Adaptive UI', 'Neuro-symbolic AI'],
        description: 'Defining the next generation of software architecture where AI agents and human users collaborate seamlessly.',
        learningQueue: ['System Design for AI', 'Cognitive Architectures', 'AI Ethics'],
        status: 'projected'
    }
];

const CareerVisualizer = () => {
    const [activeMilestone, setActiveMilestone] = useState<number>(1); // Default to current
    const [showSimulator, setShowSimulator] = useState(false);
    const [userSkills, setUserSkills] = useState('');
    const [userLearning, setUserLearning] = useState('');
    const [prediction, setPrediction] = useState<any>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleSimulate = (e: React.FormEvent) => {
        e.preventDefault();
        setIsAnalyzing(true);

        // Simulating AI analysis
        setTimeout(() => {
            let role = "Full Stack Innovator";
            let desc = "You are on track to build comprehensive systems.";
            let color = "text-blue-400";

            const combinedInput = (userSkills + " " + userLearning).toLowerCase();

            if (combinedInput.includes('ai') || combinedInput.includes('python') || combinedInput.includes('model')) {
                role = "AI Engineer";
                desc = "Your focus on intelligence suggests a future building the brains of next-gen software.";
                color = "text-green-400";
            } else if (combinedInput.includes('design') || combinedInput.includes('css') || combinedInput.includes('figma')) {
                role = "Creative Technologist";
                desc = "Your eye for design puts you in a unique position to lead frontend innovation.";
                color = "text-purple-400";
            } else if (combinedInput.includes('data') || combinedInput.includes('sql') || combinedInput.includes('backend')) {
                role = "Data Architect";
                desc = "You are building the foundation that powers the digital world.";
                color = "text-orange-400";
            }

            setPrediction({
                role,
                desc,
                color,
                year: '2027'
            });
            setIsAnalyzing(false);
        }, 1500);
    };

    return (
        <section id="career-visualizer" className="py-24 bg-gray-900/50 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-mono text-gray-300 tracking-wider">AI PREDICTION MODEL v1.0</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-white">
                        My Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Vector</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light mb-8">
                        A dynamic projection of my career trajectory, blending engineering foundations with future-tech ambitions.
                    </p>

                    <button
                        onClick={() => setShowSimulator(true)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue rounded-full hover:bg-neon-blue/20 transition-all cursor-pointer group"
                    >
                        <Sparkles size={18} />
                        Try Your Own Projection
                    </button>
                </motion.div>

                {/* Visualizer UI */}
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">

                    {/* Timeline Column */}
                    <div className="lg:col-span-1 relative">
                        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50" />

                        <div className="space-y-12 relative">
                            {milestones.map((milestone, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.2 }}
                                    onClick={() => setActiveMilestone(idx)}
                                    className={`relative flex items-center gap-6 cursor-pointer group p-4 rounded-xl transition-all duration-300 ${activeMilestone === idx ? 'bg-white/5 border border-white/10' : 'hover:bg-white/5 border border-transparent'}`}
                                >
                                    <div className={`relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center bg-gray-900 transition-colors duration-300 ${activeMilestone === idx ? `border-white ${milestone.color}` : 'border-gray-700 text-gray-700'}`}>
                                        <milestone.icon size={20} />
                                        {activeMilestone === idx && (
                                            <div className={`absolute inset-0 rounded-full blur-md opacity-50 ${milestone.color.replace('text-', 'bg-')}`} />
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <span className={`text-xs font-mono mb-1 block ${activeMilestone === idx ? 'text-white' : 'text-gray-500'}`}>{milestone.year}</span>
                                        <h3 className={`text-lg font-bold transition-colors ${activeMilestone === idx ? 'text-white' : 'text-gray-400'}`}>{milestone.role}</h3>
                                    </div>

                                    {activeMilestone === idx && (
                                        <motion.div layoutId="activeArrow" className="hidden md:block">
                                            <ArrowRight className="text-white opacity-50" size={20} />
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Details Dashboard */}
                    <div className="lg:col-span-2">
                        <motion.div
                            key={activeMilestone}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="bg-gray-900/80 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden h-full"
                        >
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 p-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

                            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 relative z-10">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">{milestones[activeMilestone].role}</h3>
                                    <p className="text-gray-400">{milestones[activeMilestone].description}</p>
                                </div>
                                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                                    STATUS: <span className={milestones[activeMilestone].status === 'current' ? 'text-green-400 animate-pulse' : 'text-gray-400 uppercase'}>{milestones[activeMilestone].status}</span>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                {/* Skills Cluster */}
                                <div>
                                    <h4 className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
                                        <Target size={14} /> Core Competencies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {milestones[activeMilestone].skills.map(skill => (
                                            <span key={skill} className="px-3 py-1.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Active Learning Queue */}
                                {milestones[activeMilestone].learningQueue.length > 0 && (
                                    <div>
                                        <h4 className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
                                            <Brain size={14} /> Learning Queue
                                        </h4>
                                        <ul className="space-y-3">
                                            {milestones[activeMilestone].learningQueue.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* AI Insight Box */}
                            <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                                <div className="flex gap-4 items-start bg-white/5 rounded-xl p-4">
                                    <Star className="text-yellow-400 flex-shrink-0 mt-1" size={18} />
                                    <div>
                                        <h5 className="text-sm font-bold text-white mb-1">AI Career Insight</h5>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            "Based on current market velocity, transitioning to <span className="text-gray-200 font-medium">{activeMilestone === 1 ? 'AI Engineering' : 'Next-Gen Architecture'}</span> in 2026 will increase engineering impact by 40%. The focus on <span className="text-gray-200 font-medium">{activeMilestone === 1 ? 'LLMs & Agents' : 'Adaptive Systems'}</span> is well-timed for the upcoming industry shift."
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>

                {/* Try Your Own Simulation Modal */}
                <AnimatePresence>
                    {showSimulator && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                                onClick={() => setShowSimulator(false)}
                            />
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative bg-gray-900 border border-white/10 rounded-2xl p-8 max-w-lg w-full z-10 shadow-2xl"
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                        <Sparkles className="text-neon-blue" size={24} />
                                        Predict My Future
                                    </h3>
                                    <button onClick={() => setShowSimulator(false)} className="text-gray-400 hover:text-white">
                                        <X size={24} />
                                    </button>
                                </div>

                                {!prediction ? (
                                    <form onSubmit={handleSimulate} className="space-y-6">
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">Top 3 Skills (e.g., React, Python)</label>
                                            <input
                                                type="text"
                                                required
                                                value={userSkills}
                                                onChange={(e) => setUserSkills(e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                                placeholder="What are you good at?"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">Current Learning Focus</label>
                                            <input
                                                type="text"
                                                required
                                                value={userLearning}
                                                onChange={(e) => setUserLearning(e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                                placeholder="What are you studying now?"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isAnalyzing}
                                            className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                        >
                                            {isAnalyzing ? (
                                                <>Analyzing Patterns...</>
                                            ) : (
                                                <>Generate Projection <ArrowRight size={18} /></>
                                            )}
                                        </button>
                                    </form>
                                ) : (
                                    <div className="text-center space-y-6 py-4">
                                        <div className="w-20 h-20 rounded-full bg-white/5 mx-auto flex items-center justify-center mb-4">
                                            <Rocket className={`w-10 h-10 ${prediction.color}`} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">PROJECTED ROLE ({prediction.year})</p>
                                            <h2 className={`text-4xl font-bold text-white mb-4`}>{prediction.role}</h2>
                                            <p className="text-gray-300 leading-relaxed">{prediction.desc}</p>
                                            <p className="text-xs text-gray-500 italic mt-6">
                                                "This projection is a probabilistic estimate based on current inputs and industry trends."
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => { setPrediction(null); setUserSkills(''); setUserLearning(''); }}
                                            className="text-sm text-gray-500 hover:text-white underline mt-4 block"
                                        >
                                            Run Another Simulation
                                        </button>
                                    </div>
                                )}

                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default CareerVisualizer;
