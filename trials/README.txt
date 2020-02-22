sudo singularity build ./ubuntu18.sif ./ubuntu18postgres.def


sudo singularity shell -C ./ubuntucvat.sif


sudo singularity instance start ./ubuntu18.sif s18
sudo singularity instance start --writable-tmpfs ./ubuntu18.sif s18  

sudo singularity instance list


sudo singularity shell -C instance://s18
