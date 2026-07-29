"use client";

  ChevronRight,
  Crown,
  Users,
  Calendar,
  Trophy,
  Star
} from "lucide-react";

export default function LeadershipTeam() {
  const president = {
    name: "Md. Rahman",
    position: "President",
    email: "president@dcma.edu.bd",
    phone: "+880 1700-000001",
    bio: "Leading DCMA with vision and dedication for student development. Over 10 years of experience in student leadership.",
    image: "/president.jpg",
    social: { linkedin: "#", twitter: "#" },
  };

  const committeeMembers = [
    {
      id: 1,
      name: "Fatema Akter",
      position: "Vice President",
      email: "vp@dcma.edu.bd",
      phone: "+880 1700-000002",
      bio: "Supporting the president and overseeing key initiatives",
      image: "/vp.jpg",
    },
    {
      id: 2,
      name: "Shahidul Islam",
      position: "General Secretary",
      email: "secretary@dcma.edu.bd",
      phone: "+880 1700-000003",
      bio: "Managing daily operations and communication",
      image: "/secretary.jpg",
    },
    {
      id: 3,
      name: "Rafiq Uddin",
      position: "Joint Secretary",
      email: "jointsecretary@dcma.edu.bd",
      phone: "+880 1700-000007",
      bio: "Assisting the general secretary in administrative tasks",
      image: "/joint.jpg",
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      position: "Treasurer",
      email: "treasurer@dcma.edu.bd",
      phone: "+880 1700-000004",
      bio: "Managing financial resources transparently",
      image: "/treasurer.jpg",
    },
    {
      id: 5,
      name: "Kamal Hossain",
      position: "Organizing Secretary",
      email: "organizing@dcma.edu.bd",
      phone: "+880 1700-000005",
      bio: "Planning and executing successful events",
      image: "/organizer.jpg",
    },
    {
      id: 6,
      name: "Tahmina Begum",
      position: "Cultural Secretary",
      email: "cultural@dcma.edu.bd",
      phone: "+880 1700-000006",
      bio: "Promoting cultural activities and talents",
      image: "/cultural.jpg",
    },
    {
      id: 7,
      name: "Rashed Khan",
      position: "Office Secretary",
      email: "office@dcma.edu.bd",
      phone: "+880 1700-000008",
      bio: "Managing office operations and documentation",
      image: "/office.jpg",
    },
    {
      id: 8,
      name: "Sumaiya Akter",
      position: "Publication Secretary",
      email: "publication@dcma.edu.bd",
      phone: "+880 1700-000009",
      bio: "Handling all publications and media content",
      image: "/publication.jpg",
    },
    {
      id: 9,
      name: "Imran Hossain",
      position: "Sports Secretary",
      email: "sports@dcma.edu.bd",
      phone: "+880 1700-000010",
      bio: "Organizing sports events and tournaments",
      image: "/sports.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Crown size={16} />
            <span>Our Leadership</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Executive Committee 2024-25
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Meet our dedicated team of leaders working tirelessly for student welfare and association development
          </p>
        </div>

        {/* President Section - Centered Top */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-2xl">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl overflow-hidden shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                {/* President Image */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 bg-white/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white text-4xl font-bold">
                    {president.name[0]}
                  </div>
                </div>
                
                {/* President Info */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white mb-3">
                    <Crown size={14} />
                    <span>Top Leadership</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {president.name}
                  </h3>
                  <p className="text-amber-100 text-lg font-medium mb-3">
                    {president.position}
                  </p>
                  <p className="text-white/90 text-sm mb-4">
                    {president.bio}
                  </p>
                  <div className="flex gap-3 justify-center md:justify-start">
                    <a href={`mailto:${president.email}`} className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all">
                      <Mail size={18} className="text-white" />
                    </a>
                    <a href={`tel:${president.phone}`} className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all">
                      <Phone size={18} className="text-white" />
                    </a>
                     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Committee Members - Grid Layout 4 per row */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200"></div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
              <Users size={14} />
              <span>Executive Committee Members</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200"></div>
          </div>

          {/* Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {committeeMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
              >
                {/* Member Image */}
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-3xl font-bold border-4 border-white/30">
                      {member.name[0]}
                    </div>
                  </div>
                  {/* Position Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-semibold text-blue-600">
                    {member.position}
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-slate-800 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 text-xs font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-slate-500 text-xs mb-4 line-clamp-2">
                    {member.bio}
                  </p>
                  
                  {/* Contact Actions */}
                  <div className="flex gap-2 justify-center pt-3 border-t border-slate-100">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
                    >
                      <Mail size={12} />
                      Email
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
                    >
                      <Phone size={12} />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Users size={20} className="text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-slate-800">15+</div>
            <div className="text-xs text-slate-500">Committee Members</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Trophy size={20} className="text-green-600" />
            </div>
            <div className="text-2xl font-bold text-slate-800">50+</div>
            <div className="text-xs text-slate-500">Events Organized</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Calendar size={20} className="text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-slate-800">5+</div>
            <div className="text-xs text-slate-500">Years of Excellence</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Star size={20} className="text-amber-600" />
            </div>
            <div className="text-2xl font-bold text-slate-800">1000+</div>
            <div className="text-xs text-slate-500">Students Impacted</div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/members"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 transition-all"
          >
            View Full Committee
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}