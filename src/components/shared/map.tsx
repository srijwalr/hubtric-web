const Map = () => {
  return (
    <div className='mx-auto'>
      <div className='relative h-[50vh]'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10995.510428490743!2d77.50707899293326!3d13.003800514105462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d00643db6e5%3A0x61ea631fd2592fc6!2sHubtric%20Manufacturing%20Pvt.%20Ltd.!5e0!3m2!1sen!2sch!4v1718355259658!5m2!1sen!2sch'
          className='absolute top-0 left-0 w-full h-full border-0'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
