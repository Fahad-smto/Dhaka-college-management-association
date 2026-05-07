"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Vote, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  AlertCircle,
  ChevronRight,
  Award,
  BarChart3,
  FileText,
  MessageCircle,
  UserCheck,
  TrendingUp,
  Shield,
  Info
} from "lucide-react";
import Navbar from  "../components/NavBar";
import Footer from  "../components/Footer";

interface Candidate {
  id: number;
  name: string;
  position: string;
  party: string;
  symbol: string;
  image: string;
  bio: string;
  manifesto: string[];
  votes?: number;
}

interface Position {
  id: string;
  title: string;
  description: string;
  candidates: Candidate[];
  totalVotes?: number;
}

export default function ElectionsPage() {
  const [activePosition, setActivePosition] = useState("president");
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const positions: Position[] = [
    {
      id: "president",
      title: "President",
      description: "The highest leadership position responsible for overall association management",
      candidates: [
        {
          id: 1,
          name: "Md. Rahman",
          position: "President",
          party: "United Student Forum",
          symbol: "🌹 Rose",
          image: "/candidates/rahman.jpg",
          bio: "3rd year Business Administration student with 2 years of experience in student leadership. Previously served as Cultural Secretary.",
          manifesto: [
            "Establish a student support fund",
            "Organize monthly career workshops",
            "Improve campus facilities",
            "Launch mentorship program with alumni"
          ],
        },
        {
          id: 2,
          name: "Fatema Akter",
          position: "President",
          party: "Progressive Alliance",
          symbol: "📚 Book",
          image: "/candidates/fatema.jpg",
          bio: "2nd year Economics student, former class representative and debate club president.",
          manifesto: [
            "Digital transformation of association",
            "International student exchange program",
            "Weekly leadership seminars",
            "Student mental health support"
          ],
        },
      ],
    },
    {
      id: "vp",
      title: "Vice President",
      description: "Supports the president and oversees key initiatives",
      candidates: [
        {
          id: 3,
          name: "Shahidul Islam",
          position: "Vice President",
          party: "United Student Forum",
          symbol: "✊ Fist",
          image: "/candidates/shahidul.jpg",
          bio: "3rd year English student, experienced in organizing large-scale events.",
          manifesto: [
            "Enhance extracurricular activities",
            "Build industry connections",
            "Student entrepreneurship program",
            "Annual cultural festival"
          ],
        },
        {
          id: 4,
          name: "Nusrat Jahan",
          position: "Vice President",
          party: "Progressive Alliance",
          symbol: "⭐ Star",
          image: "/candidates/nusrat.jpg",
          bio: "2nd year Computer Science student, tech enthusiast and women in leadership advocate.",
          manifesto: [
            "Women empowerment programs",
            "Tech innovation lab",
            "Student skill development center",
            "Online learning resources"
          ],
        },
      ],
    },
    {
      id: "secretary",
      title: "General Secretary",
      description: "Manages daily operations and communication",
      candidates: [
        {
          id: 5,
          name: "Kamal Hossain",
          position: "General Secretary",
          party: "United Student Forum",
          symbol: "📝 Pen",
          image: "/candidates/kamal.jpg",
          bio: "3rd year Political Science student, excellent organizer and communicator.",
          manifesto: [
            "Transparent communication system",
            "Monthly newsletters",
            "Student feedback mechanism",
            "Digital document management"
          ],
        },
        {
          id: 6,
          name: "Tahmina Begum",
          position: "General Secretary",
          party: "Progressive Alliance",
          symbol: "🔑 Key",
          image: "/candidates/tahmina.jpg",
          bio: "2nd year English student, former magazine editor and content creator.",
          manifesto: [
            "Improve inter-department communication",
            "Launch student portal",
            "Weekly updates and announcements",
            "Open door policy"
          ],
        },
      ],
    },
  ];

  const currentPosition = positions.find(p => p.id === activePosition);
  const votingEndDate = "December 25, 2024";
  const votingStartDate = "December 20, 2024";

  const handleVote = (candidateId: number) => {
    setSelectedCandidate(candidateId);
    setShowConfirm(true);
  };

  const confirmVote = () => {
    setHasVoted(true);
    setShowConfirm(false);
    // Here you would submit the vote to your backend
  };

  const getPositionProgress = (positionId: string) => {
    const progress: Record<string, number> = {
      president: 65,
      vp: 58,
      secretary: 42,
    };
    return progress[positionId] || 50;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
              <Vote size={16} />
              <span>Annual Elections 2024-25</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Cast Your Vote</h1>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Choose your leaders wisely. Your vote shapes the future of our association.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Election Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Calendar size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Voting Period</p>
                  <p className="font-semibold text-slate-800">{votingStartDate} - {votingEndDate}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <Users size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Total Candidates</p>
                  <p className="font-semibold text-slate-800">6 Candidates</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                  <UserCheck size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Eligible Voters</p>
                  <p className="font-semibold text-slate-800">450+ Members</p>
                </div>
              </div>
            </div>
          </div>

          {/* Voting Instructions Banner */}
          {!hasVoted && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <Info size={20} className="text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-800">How to Vote</h3>
                  <p className="text-sm text-blue-600">
                    1. Select a position from the tabs below • 2. Review candidate manifestos • 
                    3. Click "Vote" on your chosen candidate • 4. Confirm your vote
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Vote Confirmation Message */}
          {hasVoted && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-green-600" />
                <div>
                  <h3 className="font-semibold text-green-800">Thank You for Voting!</h3>
                  <p className="text-sm text-green-600">
                    Your vote has been recorded. Results will be announced on {votingEndDate}.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Position Tabs */}
          <div className="flex flex-wrap gap-3 mb-8 border-b border-slate-200 pb-4">
            {positions.map((position) => (
              <button
                key={position.id}
                onClick={() => setActivePosition(position.id)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  activePosition === position.id
                    ? "bg-orange-600 text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {position.title}
                <span className="ml-2 px-1.5 py-0.5 rounded-full text-xs bg-white/20">
                  {position.candidates.length}
                </span>
              </button>
            ))}
          </div>

          {/* Current Position Details */}
          {currentPosition && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800">{currentPosition.title}</h2>
                <p className="text-slate-500">{currentPosition.description}</p>
              </div>

              {/* Candidates Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {currentPosition.candidates.map((candidate) => (
                  <div
                    key={candidate.id}
                    className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border overflow-hidden ${
                      selectedCandidate === candidate.id && showConfirm
                        ? "border-orange-400 ring-2 ring-orange-200"
                        : "border-slate-100"
                    }`}
                  >
                    {/* Candidate Header */}
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-2xl font-bold">
                          {candidate.name[0]}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-800">{candidate.name}</h3>
                          <p className="text-orange-600 font-medium">{candidate.party}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm text-slate-500">Symbol:</span>
                            <span className="text-sm font-semibold text-slate-700">{candidate.symbol}</span>
                          </div>
                        </div>
                        {!hasVoted && (
                          <button
                            onClick={() => handleVote(candidate.id)}
                            className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all flex items-center gap-2"
                          >
                            <Vote size={16} />
                            Vote
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Candidate Details */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                          <UserCheck size={16} className="text-orange-600" />
                          About
                        </h4>
                        <p className="text-sm text-slate-600">{candidate.bio}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                          <FileText size={16} className="text-orange-600" />
                          Manifesto / Key Promises
                        </h4>
                        <ul className="space-y-2">
                          {candidate.manifesto.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Voting Progress Section */}
          <div className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <BarChart3 size={20} className="text-orange-600" />
              Voting Progress
            </h3>
            <div className="space-y-4">
              {positions.map((position) => (
                <div key={position.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">{position.title}</span>
                    <span className="text-slate-500">{getPositionProgress(position.id)}% Voted</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-orange-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${getPositionProgress(position.id)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Election Guidelines */}
          <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
              <Shield size={18} className="text-orange-600" />
              Election Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">• Each member can vote only once per position</li>
                <li className="flex items-start gap-2">• Votes are confidential and secure</li>
                <li className="flex items-start gap-2">• Campaigning ends 24 hours before voting starts</li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">• Results will be announced on election day</li>
                <li className="flex items-start gap-2">• For complaints, contact Election Commission</li>
                <li className="flex items-start gap-2">• Decision of Election Commission is final</li>
              </ul>
            </div>
          </div>

          {/* Election Commission Contact */}
          <div className="mt-6 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700"
            >
              <MessageCircle size={16} />
              Contact Election Commission for any queries
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && selectedCandidate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Vote size={28} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Confirm Your Vote</h3>
              <p className="text-slate-500 text-sm mt-2">
                Are you sure you want to vote for this candidate?
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-4 mb-4">
              <p className="font-semibold text-slate-800">Candidate:</p>
              <p className="text-slate-600">
                {currentPosition?.candidates.find(c => c.id === selectedCandidate)?.name}
              </p>
              <p className="font-semibold text-slate-800 mt-2">Position:</p>
              <p className="text-slate-600">{currentPosition?.title}</p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-slate-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={confirmVote}
                className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle size={16} />
                Confirm Vote
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}