export default function DashboardPage() {
    const stats = {
      users: 120,
      services: 15,
      projects: 25,
      contacts: 40,
      testimonials: 10,
    };
  
    return (
      <>
        <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-medium">Users</h3>
            <p className="text-2xl font-bold">{stats.users}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-medium">Services</h3>
            <p className="text-2xl font-bold">{stats.services}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-medium">Projects</h3>
            <p className="text-2xl font-bold">{stats.projects}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-medium">Contacts</h3>
            <p className="text-2xl font-bold">{stats.contacts}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-medium">Testimonials</h3>
            <p className="text-2xl font-bold">{stats.testimonials}</p>
          </div>
        </div>
      </>
    );
  }
  