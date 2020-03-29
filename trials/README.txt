sudo singularity build ./ubuntu18.sif ./cvatwip.def

sudo singularity build ./ubuntu18.sif ./ubuntu18postgres.def

sudo singularity build ./ubuntucvat.sif ./ubuntu18postgres.def


sudo singularity shell -C ./ubuntucvat.sif


sudo singularity instance start ./ubuntu18.sif s18
sudo singularity instance start --writable-tmpfs ./ubuntu18.sif s18  

sudo singularity instance stop s18

sudo singularity instance list

sudo singularity instance stop s18


sudo singularity shell -C instance://s18

sudo singularity shell -C ./ubuntu18.sif



see example: https://github.com/verysure/postgres-alpine


example for singlularity 2.5:
singularity build nix_ubuntu_testing8.img docker-daemon://nix_ubuntu:testing8
