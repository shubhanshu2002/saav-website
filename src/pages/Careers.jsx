import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const jobs = [
  {
    title: "Agent, Sales Support",
    desc:
      "You’ll be responsible for processing customer orders, responding to inquiries by email and phone, and resolving issues related to orders.",
  },
  {
    title: "IT Project Manager",
    desc:
      "You will ensure planning and smooth daily operations, guaranteeing quality, scheduling, and optimal resource management.",
  },
  {
    title: "Associate Account Manager",
    desc:
      "You will play a key role in achieving sales objectives by advising clients, preparing quotes, and ensuring rigorous follow-ups.",
  },
  {
    title: "Senior Consultant, Data and AI",
    desc:
      "You will work directly with clients to understand business needs and architect the right technical solutions.",
  },
  {
    title: "Account Manager – GTA",
    desc:
      "Your role focuses on managing enterprise accounts and expanding market presence through IT services.",
  },
];

const Careers = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  const openForm = (role) => {
    const formBaseUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfS5NsS07PUViVmIwS3OgxMKqS2TLrEDtY4Pm9Ixs2if2XNfw/viewform";
  
    const roleFieldId = "entry.1767431060";
  
    const url = `${formBaseUrl}?${roleFieldId}=${encodeURIComponent(role)}`;
  
    window.open(url, "_blank");
  };
  
  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Find Your Next Challenge
          </h2>

          <div className="flex gap-3 self-start md:self-auto">
            <button
              onClick={() => scroll("left")}
              className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100"
            >
              <ArrowLeft />
            </button>

            <button
              onClick={() => scroll("right")}
              className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-blue-600 flex items-center justify-center hover:bg-blue-50"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-6 snap-x snap-mandatory"
        >
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="min-w-[85%] sm:min-w-[360px] snap-center bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div className="p-8">
                <h3 className="text-xl font-medium mb-4">{job.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-5">
                  {job.desc}
                </p>
              </div>

              <button
                onClick={() => openForm(job.title)}
                className="flex justify-end px-6 py-4 border-t hover:bg-slate-50 transition"
              >
                <ArrowRight className="text-blue-600" />
              </button>
            </div>
          ))}
        </div>

        {/* Open application */}
        <div className="mt-14 flex justify-center md:justify-start">
          <button
            onClick={() => openForm("Open Application")}
            className="inline-flex items-center gap-3 bg-white border border-slate-300 px-6 py-4 rounded-lg shadow-sm hover:shadow transition"
          >
            Submit an open application
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
