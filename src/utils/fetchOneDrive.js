const getResumeFromOneDrive = async () => {
  const resumeUrl = `${import.meta.env.VITE_RESUME_FILE_PATH}`;
  const downloadUrl = `${import.meta.env.VITE_RESUME_DOWNLOAD_PATH}`;
  return [resumeUrl, downloadUrl];
};

export default getResumeFromOneDrive;
