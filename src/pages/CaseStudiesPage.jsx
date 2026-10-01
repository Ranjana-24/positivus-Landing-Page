import CaseStudiesTop from "../components/CaseStudiesTop"
import CaseStudies from "../components/CaseStudies"
export default function CaseStudiesPage() {
    return(
        <>
        <div className="mt-15 md:mt-20">
          <CaseStudiesTop />
          <CaseStudies />
          </div>
        </>
    )
}