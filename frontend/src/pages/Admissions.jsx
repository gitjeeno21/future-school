import AdmissionsComponent from '../components/Admissions'
import AdmissionQueryForm from '../components/AdmissionQueryForm'

const Admissions = () => {
  return (
    <main className="pt-20 bg-gray-50 pb-20">
      {/* Existing admissions info */}
      <AdmissionsComponent />
      
      {/* New attractive inquiry form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-6">Take the first step towards a bright future.</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join Future School CBSE and give your child the foundation they need to succeed in a rapidly changing world. Our modern curriculum and expert faculty ensure holistic development.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary-blue flex-shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">Submit Inquiry</h4>
                  <p className="text-sm text-gray-600">Fill out our quick online form</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary-blue flex-shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">Campus Tour</h4>
                  <p className="text-sm text-gray-600">Visit us and experience our facilities</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary-blue flex-shrink-0 font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Entrance Test</h4>
                  <p className="text-sm text-gray-600">Simple assessment for standard placement</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <AdmissionQueryForm />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Admissions
