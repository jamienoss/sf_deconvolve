Search.setIndex({envversion:46,filenames:["functions","functions.astro","functions.comp","functions.cosmo2","functions.errors","functions.extra_math","functions.fits","functions.image","functions.interface","functions.log","functions.matrix","functions.np_adjust","functions.shape","functions.signal","functions.stats","functions.types","index","modules","psf","psf.algorithms","psf.convolve","psf.cost","psf.deconvolve","psf.directional","psf.linear","psf.noise","psf.operators","psf.optimisation","psf.plotting","psf.proximity","psf.reweight","psf.svd","psf.transform","psf.wavelet","psf_scripts","psf_scripts.add_noise_script","psf_scripts.assign_random_psf","psf_scripts.check_residual","psf_scripts.compare","psf_scripts.deconvolution_args","psf_scripts.deconvolution_script","psf_scripts.deconvolution_script_cython","psf_scripts.deconvolution_script_pypy","psf_scripts.extract_euclid_psf","psf_scripts.metrics","psf_scripts.reconstruction_script_v2","psf_scripts.shape_test"],objects:{"":{functions:[0,4,0,"-"],psf:[18,4,0,"-"],psf_scripts:[34,4,0,"-"]},"functions.astro":{ang_sep:[1,5,1,""],check_dec:[1,5,1,""],check_obj:[1,5,1,""],check_ra:[1,5,1,""],deg2rad:[1,5,1,""],flux2mag:[1,5,1,""],mag2flux:[1,5,1,""],rad2deg:[1,5,1,""],radec2xyz:[1,5,1,""],xyz2radec:[1,5,1,""]},"functions.comp":{check_float:[2,5,1,""],check_int:[2,5,1,""],check_min:[2,5,1,""],check_minmax:[2,5,1,""],find_bin:[2,5,1,""],nan2one:[2,5,1,""],nan2zero:[2,5,1,""],num_bins:[2,5,1,""],round3:[2,5,1,""],scale:[2,5,1,""],within:[2,5,1,""],x_vals:[2,5,1,""]},"functions.cosmo2":{E:[3,5,1,""],E_inv:[3,5,1,""],age:[3,5,1,""],check_cosmo:[3,5,1,""],dD_prop_dz:[3,5,1,""],dV_comov_dz:[3,5,1,""],d_H:[3,5,1,""],d_angdi:[3,5,1,""],d_comov:[3,5,1,""],d_lum:[3,5,1,""],d_prop:[3,5,1,""],rho_crit:[3,5,1,""],t_H:[3,5,1,""],v_comov:[3,5,1,""]},"functions.errors":{catch_error:[4,5,1,""],file_name_error:[4,5,1,""],warn:[4,5,1,""]},"functions.extra_math":{factor:[5,5,1,""],fourier_derivative:[5,5,1,""],integ_2arg:[5,5,1,""],k_val:[5,5,1,""],mfactor:[5,5,1,""],vinteg_2arg:[5,5,1,""]},"functions.fits":{fit_odr:[6,5,1,""],least_squares:[6,5,1,""],linear_fit:[6,5,1,""],polynomial:[6,5,1,""],polynomial_fit:[6,5,1,""],x_matrix:[6,5,1,""]},"functions.image":{FetchWindows:[7,7,1,""],SAT:[7,7,1,""],downsample:[7,5,1,""],fftconvolve:[7,5,1,""],fftdeconvolve:[7,5,1,""],gen_mask:[7,5,1,""],image_centres:[7,5,1,""],kernel_pattern:[7,5,1,""],pixel_pos:[7,5,1,""],rearrange_kernel:[7,5,1,""],resize_even_image:[7,5,1,""],roll_2d:[7,5,1,""],roll_sequence:[7,5,1,""],rot_and_roll:[7,5,1,""],window:[7,5,1,""]},"functions.image.FetchWindows":{get_pixels:[7,6,1,""],n_pixels:[7,6,1,""],scan:[7,6,1,""]},"functions.image.SAT":{get_area:[7,6,1,""],get_npx:[7,6,1,""],get_var:[7,6,1,""],set_patch:[7,6,1,""],set_patches:[7,6,1,""]},"functions.interface":{h_line:[8,5,1,""],progress_bar:[8,5,1,""]},"functions.log":{close_log:[9,5,1,""],set_up_log:[9,5,1,""]},"functions.matrix":{fancy_transpose:[10,5,1,""],ftl:[10,5,1,""],ftr:[10,5,1,""],gram_schmidt:[10,5,1,""],nuclear_norm:[10,5,1,""],project:[10,5,1,""],rot_matrix:[10,5,1,""],rotate:[10,5,1,""]},"functions.np_adjust":{data2np:[11,5,1,""],pad2d:[11,5,1,""],rotate:[11,5,1,""],rotate_stack:[11,5,1,""],x_bins:[11,5,1,""],x_bins_step:[11,5,1,""]},"functions.shape":{Ellipticity:[12,7,1,""]},"functions.shape.Ellipticity":{get_centroid:[12,6,1,""],get_ellipse:[12,6,1,""],get_moments:[12,6,1,""],update_centroid:[12,6,1,""],update_weights:[12,6,1,""],update_xy:[12,6,1,""]},"functions.signal":{Gaussian_filter:[13,5,1,""],mex_hat:[13,5,1,""],mex_hat_dir:[13,5,1,""],transpose_test:[13,5,1,""]},"functions.stats":{autocorr2d:[14,5,1,""],chi2_gof:[14,5,1,""],gaussian_kernel:[14,5,1,""],mad:[14,5,1,""],med_snr:[14,5,1,""],mse:[14,5,1,""],psnr:[14,5,1,""],sigma_from_snr:[14,5,1,""],sigma_mad:[14,5,1,""]},"psf.algorithms":{PowerMethod:[19,7,1,""]},"psf.algorithms.PowerMethod":{get_spec_rad:[19,6,1,""],set_initial_x:[19,6,1,""]},"psf.convolve":{convolve:[20,5,1,""],psf_convolve:[20,5,1,""]},"psf.cost":{costFunction:[21,7,1,""],costTest:[21,7,1,""]},"psf.cost.costFunction":{check_cost:[21,6,1,""],check_residual:[21,6,1,""],get_cost:[21,6,1,""],l1norm:[21,6,1,""],l2norm:[21,6,1,""],nucnorm:[21,6,1,""],plot_cost:[21,6,1,""],update_weights:[21,6,1,""]},"psf.cost.costTest":{get_cost:[21,6,1,""]},"psf.deconvolve":{go:[22,5,1,""]},"psf.directional":{convolve_dir_filters:[23,5,1,""],get_dir_filters:[23,5,1,""]},"psf.linear":{Directional:[24,7,1,""],Identity:[24,7,1,""],LinearCombo:[24,7,1,""],Wavelet:[24,7,1,""]},"psf.linear.Directional":{get_filters:[24,6,1,""]},"psf.linear.Identity":{adj_op:[24,6,1,""],op:[24,6,1,""]},"psf.linear.LinearCombo":{adj_op:[24,6,1,""],op:[24,6,1,""]},"psf.linear.Wavelet":{adj_op:[24,6,1,""],op:[24,6,1,""]},"psf.noise":{add_noise:[25,5,1,""],denoise:[25,5,1,""]},"psf.operators":{GradBasic:[26,7,1,""],GradZero:[26,7,1,""],StandardPSF:[26,7,1,""],StandardPSFnoGrad:[26,7,1,""]},"psf.operators.GradBasic":{MtMX:[26,6,1,""],get_grad:[26,6,1,""]},"psf.operators.GradZero":{get_grad:[26,6,1,""]},"psf.operators.StandardPSF":{MX:[26,6,1,""],MtX:[26,6,1,""]},"psf.optimisation":{Condat:[27,7,1,""],FISTA:[27,7,1,""],ForwardBackward:[27,7,1,""],GenForwardBackward:[27,7,1,""]},"psf.optimisation.Condat":{iterate:[27,6,1,""],update:[27,6,1,""],update_param:[27,6,1,""]},"psf.optimisation.FISTA":{speed_switch:[27,6,1,""],speed_up:[27,6,1,""],update_lambda:[27,6,1,""]},"psf.optimisation.ForwardBackward":{iterate:[27,6,1,""],update:[27,6,1,""]},"psf.optimisation.GenForwardBackward":{iterate:[27,6,1,""],update:[27,6,1,""]},"psf.plotting":{plotCost:[28,5,1,""]},"psf.proximity":{LowRankMatrix:[29,7,1,""],Positive:[29,7,1,""],ProximityCombo:[29,7,1,""],SubIter:[29,7,1,""],Threshold:[29,7,1,""],positivity_operator:[29,5,1,""]},"psf.proximity.LowRankMatrix":{op:[29,6,1,""]},"psf.proximity.Positive":{op:[29,6,1,""]},"psf.proximity.ProximityCombo":{op:[29,6,1,""]},"psf.proximity.SubIter":{op:[29,6,1,""],update_u:[29,6,1,""],update_weights:[29,6,1,""]},"psf.proximity.Threshold":{op:[29,6,1,""],update_weights:[29,6,1,""]},"psf.reweight":{cwbReweight:[30,7,1,""]},"psf.reweight.cwbReweight":{reweight:[30,6,1,""]},"psf.svd":{find_n_pc:[31,5,1,""],svd_thresh:[31,5,1,""],svd_thresh_coef:[31,5,1,""]},"psf.transform":{cube2map:[32,5,1,""],cube2matrix:[32,5,1,""],map2cube:[32,5,1,""],map2matrix:[32,5,1,""],matrix2cube:[32,5,1,""],matrix2map:[32,5,1,""]},"psf.wavelet":{call_mr_transform:[33,5,1,""],filter_convolve:[33,5,1,""],filter_convolve_stack:[33,5,1,""],get_mr_filters:[33,5,1,""]},"psf_scripts.add_noise_script":{add_noise_conv:[35,5,1,""],get_opts:[35,5,1,""],get_sigma:[35,5,1,""],main:[35,5,1,""],run_script:[35,5,1,""]},"psf_scripts.assign_random_psf":{get_opts:[36,5,1,""],main:[36,5,1,""],run_script:[36,5,1,""]},"psf_scripts.check_residual":{get_opts:[37,5,1,""],main:[37,5,1,""],make_plots:[37,5,1,""],run_scipt:[37,5,1,""]},"psf_scripts.compare":{get_opts:[38,5,1,""],main:[38,5,1,""],make_plot:[38,5,1,""],make_tidy:[38,5,1,""],run_script:[38,5,1,""]},"psf_scripts.deconvolution_args":{get_opts:[39,5,1,""]},"psf_scripts.deconvolution_script":{check_data_format:[40,5,1,""],main:[40,5,1,""],run_script:[40,5,1,""],set_out_string:[40,5,1,""],test_deconvolution:[40,5,1,""]},"psf_scripts.extract_euclid_psf":{extract_psf:[43,5,1,""],get_opts:[43,5,1,""],main:[43,5,1,""],run_script:[43,5,1,""]},"psf_scripts.metrics":{add_weights:[44,5,1,""],add_weights_set:[44,5,1,""],get_opts:[44,5,1,""],get_pi:[44,5,1,""],main:[44,5,1,""],make_plots:[44,5,1,""],perform_test:[44,5,1,""],pseudo_inverse:[44,5,1,""],read_files:[44,5,1,""],read_noisy_files:[44,5,1,""],run_script:[44,5,1,""]},"psf_scripts.shape_test":{get_opts:[46,5,1,""],get_theta:[46,5,1,""],get_xy:[46,5,1,""],main:[46,5,1,""],make_plot:[46,5,1,""]},functions:{"interface":[8,4,0,"-"],astro:[1,4,0,"-"],comp:[2,4,0,"-"],cosmo2:[3,4,0,"-"],errors:[4,4,0,"-"],extra_math:[5,4,0,"-"],fits:[6,4,0,"-"],image:[7,4,0,"-"],log:[9,4,0,"-"],matrix:[10,4,0,"-"],np_adjust:[11,4,0,"-"],shape:[12,4,0,"-"],signal:[13,4,0,"-"],stats:[14,4,0,"-"]},psf:{algorithms:[19,4,0,"-"],convolve:[20,4,0,"-"],cost:[21,4,0,"-"],deconvolve:[22,4,0,"-"],directional:[23,4,0,"-"],linear:[24,4,0,"-"],noise:[25,4,0,"-"],operators:[26,4,0,"-"],optimisation:[27,4,0,"-"],plotting:[28,4,0,"-"],proximity:[29,4,0,"-"],reweight:[30,4,0,"-"],svd:[31,4,0,"-"],transform:[32,4,0,"-"],wavelet:[33,4,0,"-"]},psf_scripts:{add_noise_script:[35,4,0,"-"],assign_random_psf:[36,4,0,"-"],check_residual:[37,4,0,"-"],compare:[38,4,0,"-"],deconvolution_args:[39,4,0,"-"],deconvolution_script:[40,4,0,"-"],extract_euclid_psf:[43,4,0,"-"],metrics:[44,4,0,"-"],shape_test:[46,4,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","method","Python method"],"3":["py","class","Python class"],"4":["np","module","Python module"],"5":["np","function","Python function"],"6":["np","method","Python method"],"7":["np","class","Python class"]},objtypes:{"0":"py:module","1":"py:function","2":"py:method","3":"py:class","4":"np:module","5":"np:function","6":"np:method","7":"np:class"},terms:{"2007n":12,"3103c":12,"abstract":12,"case":26,"class":[7,12,19,21,22,24,26,27,29,30,31],"default":[19,20,21,25,27,31,33],"final":28,"float":[19,21,23,25,27,29,30,31],"int":[19,21,23,27,31],"return":[20,21,22,23,24,25,26,27,29,31,32,33,40],"true":[19,21,27,33],action:26,activ:27,add:[25,35],add_nois:25,add_noise_conv:35,add_noise_script:[17,34],add_weight:44,add_weights_set:44,addit:[24,29],additon:33,adj_op:24,adjoint:24,after:[21,29],algorithm:[17,18],algoritm:27,all:[7,20,24,29,31],analysi:30,ang_sep:1,angl:[1,10,23],angle_num:[23,24],appli:29,applic:[27,30],arbitrari:[22,24,29],arg1:5,arg2:5,arg:7,argument:[22,24,29,35,37,38,39,44,46],arrai:[2,19,20,21,22,23,24,25,26,29,30,31,32,33,40],array_shap:7,arrrai:19,arxiv:12,ascens:1,assign_random_psf:[17,34],astro:0,astropi:20,author:[12,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,39,40],auto:31,auto_iter:27,auto_run:19,autocorr2d:14,automat:[19,27],b2010:27,backward:27,baker:12,base:[12,23,26,27],basic:[19,26],bauschk:27,been:[29,40],begin:27,between:21,bin_siz:2,bm2007:12,bool:[19,20,21,27,33],boyd:30,c2013:[12,27],calcualt:19,calcul:[19,21,26,46],call:[27,33],call_mr_transform:33,can:24,cand:30,catch_error:4,centroid:12,cfm:12,chapter:27,check:[1,21,40],check_cosmo:3,check_cost:21,check_data_format:40,check_dec:1,check_float:2,check_int:2,check_min:2,check_minmax:2,check_obj:1,check_ra:1,check_residu:[17,21,34],chi2_gof:14,classs:26,close_log:9,coars:33,coeffici:[21,23,24,29,31],com:[12,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,39,40],combin:[24,29],combo:29,comp:0,compar:[17,34],compon:31,composit:27,condat:27,contain:[12,19,20,21,23,24,25,26,27,28,29,30,31,32,33,40],contraint:21,converg:[19,21,27],convex:27,convolut:[20,26],convolv:[17,18],convolve_dir_filt:23,convolve_fft:20,corner:7,correctli:40,correl:31,cosmo2:0,cost:[17,18],cost_list:28,costfunct:21,costtest:21,creat:40,criteria:27,cropper:12,cube2map:32,cube2matrix:32,cube:32,current:27,cwb2007:30,cwbreweight:30,d_angdi:3,d_comov:3,d_h:3,d_lum:3,d_prop:3,data1:44,data2:44,data2np:11,data3:44,data:[2,7,10,11,12,14,19,20,21,22,23,24,25,26,29,30,31,32,33,35,37,38,40,44],data_cub:32,data_exp:14,data_map:32,data_matrix:32,data_ob:14,data_s:7,data_set:44,data_shap:[7,14,19,29,33],date:[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,39,40],dd_prop_dz:3,ddof:14,dec:1,decconvolv:22,decim:2,declin:1,decomposit:31,deconv_data:40,deconvolut:[21,22,39,40],deconvolution_arg:[17,34],deconvolution_script:[17,34,39],deconvolution_script_cython:[17,34],deconvolution_script_pypi:[17,34],deconvolv:[17,18,21],decor:2,defin:[12,19,24,26,29],defualt:26,defult:21,deg2rad:1,degre:[20,24],degred:21,denois:25,describ:30,deviat:25,differ:[20,21],dimens:20,direct:[17,18],doe:22,downsampl:7,dtype:11,dual:27,dummi:[24,26],dv_comov_dz:3,e_inv:3,each:[20,21],either:[20,27],element:29,ellip:46,ellipt:[12,40,46],engin:27,enhanc:30,entri:31,equat:27,err_typ:44,error:0,estim:[12,29,35],except:[2,4],execut:40,experi:12,express:12,extra_factor:29,extra_math:0,extract_euclid_psf:[17,34],extract_psf:43,factor:[5,7,29,30,31],fals:[7,13,20,27,33],fancy_transpos:10,farren:[12,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,39,40],fetchwindow:7,fft:20,fftconvolv:[7,20],fftdeconvolv:7,fig_num:44,file:[21,28,33],file_nam:[4,43],file_name_error:4,filenam:9,filter:[23,24,29,33],filter_convolv:33,filter_convolve_stack:33,filter_rot:33,find:31,find_bin:2,find_n_pc:31,fista:27,fit:0,fit_odr:6,fix:[20,26,27],flux2mag:1,flux:1,form:21,format:40,forward:27,forwardbackward:27,fourier:[13,30],fourier_deriv:5,fred:[12,23,26],from:[25,26,27,29,30,32,35,40,46],front:12,ftl:10,ftr:10,full:21,func:[2,5,7],galaxi:[12,22,40],gauss:25,gaussian:[25,35],gaussian_filt:13,gaussian_kernel:14,gen_mask:7,gener:27,genforwardbackward:27,get:[19,21,23,26,33,35,37,38,39,44,46],get_area:7,get_centroid:12,get_cost:21,get_dir_filt:23,get_ellips:12,get_filt:24,get_grad:26,get_moment:12,get_mr_filt:33,get_npx:7,get_opt:[35,36,37,38,39,43,44,46],get_pi:44,get_pixel:7,get_sigma:35,get_spec_rad:19,get_theta:46,get_var:7,get_xi:46,given:[20,32],gmail:[12,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,39,40],grad:[21,27],gradbas:26,gradient:[21,26,27],gradzero:26,gram_schmidt:10,guess:27,h_0:3,h_line:8,hao:23,hard:[25,29,31],hartman:12,have:[20,29],http:[12,20],ident:24,im_shap:32,imag:0,image_centr:7,image_shap:7,implement:[19,21,27,29,30],individu:32,inhereit:27,inherit:26,initi:[19,27,29],initialis:[19,22,27],input:[1,19,20,21,22,23,24,25,26,29,31,32,33,40],instanc:[19,24,29,31,40],integ:31,integ_2arg:5,interfac:0,intermedi:27,interv:21,invalid:[31,32],invers:27,involv:27,isap:33,iter:[12,19,21,27,29],journal:[27,30],k_val:5,keep:33,kernel:[7,20,44],kernel_pattern:7,kernel_shap:7,keyword:[22,24,29],known:22,kwarg:[7,22,24,29],l1norm:21,l2norm:21,lambda:27,lambda_init:27,lambda_reg:21,lambda_upd:27,layout:[7,32],least_squar:6,left:31,lens:12,less:2,level:25,lim_low:5,lim_up:5,linear:[17,18],linear_fit:6,linearcombo:24,lipschitzian:27,list:[24,27,28,29,33],log:[0,4],logger:40,low:[21,29],lowr:21,lowr_typ:29,lowrankmatrix:29,mad:14,mag2flux:1,mag:1,main:[35,36,37,38,40,43,44,46],make:[28,37],make_plot:[37,38,44,46],make_tidi:38,map2cub:32,map2matrix:32,map:32,map_shap:32,mask:7,match:22,matrix2cub:32,matrix2map:32,matrix:0,max:14,max_it:[19,27],max_pix:14,max_val:2,max_valu:2,maximum:[19,27],med_snr:14,met:27,method:[12,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,39,40],metric:[17,34],mex_hat:13,mex_hat_dir:13,mfactor:5,min_val:2,min_valu:2,minim:30,minimum:[2,31],mnra:12,moallem:12,mode:[21,40],moment:12,mr_transform:[24,33],mse:14,mtmx:26,mtx:26,multipl:29,n_bin:2,n_iter:12,n_pc:31,n_pixel:7,name:[21,28],nan2on:2,nan2zero:2,nativ:2,ndarrai:[20,21,22,23,24,25,26,27,29,30,31,32,33,40],ngole:[12,23,26,29],nice:37,nois:[17,18],noise_typ:25,noisy_data_set:44,noisy_imag:14,none:[4,7,11,12,13,21,24,27,28,29,31,33,44],norm:[14,21],normal:[20,24],note:[2,12,26,27,30],np_adjust:0,nuber:23,nuclear:21,nuclear_norm:10,nucnorm:21,num_bin:2,number:[2,19,20,21,27,31],numpi:2,obj1:1,obj2:1,obj:1,obj_var:[20,26],object:[1,20,22,26],observ:[21,26,40],obtain:[21,33],off:27,omega_l:3,omega_m:3,onli:[21,25,29],oper:[13,17,18,19,21,22,24],operator_t:13,opt:33,optic:12,optim:[21,27],optimis:[17,18,21,22,24],option:[19,20,21,24,25,27,28,29,31,33,39],order:5,org:[12,20],origin:21,orthonorm:10,osapublish:12,ouput:40,output:[2,21,28,32,33,40],output_fil:38,pad2d:11,paramat:27,paramet:[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,40],path:[33,44],perfom:25,perform:[19,33],perform_test:44,pixel:[7,40],pixel_po:7,pixel_rad:7,place:[2,27],plot:[17,18,21,27],plot_cost:21,plotcost:28,point:27,poisson:25,polynomi:6,polynomial_fit:6,posit:[21,29],positivity_oper:29,power:19,powermethod:[19,26],preserv:29,primal:27,princip:31,print:21,print_cost:21,problem:27,progress_bar:8,project:10,properti:26,provid:[2,20,23,27],prox:27,prox_dual:27,prox_list:27,proxim:[17,18,27],proximitycombo:29,pseudo_invers:44,psf_convolv:20,psf_rot:20,psf_script:[16,17],psf_type:[20,26],psnr:14,qualiti:40,r2012:27,rad2deg:1,radec2xyz:1,radiu:[19,43,46],raguet:27,rais:[2,20,22,25,31,32],random:[7,19,35],random_se:44,rank:[21,29],ratio:35,reach:27,read_fil:44,read_noisy_fil:44,rearrange_kernel:7,reconstruct:27,reconstruction_script_v2:[17,34],recov:26,refer:[12,27,30],regular:21,relax:27,remov:[25,33],remove_fil:33,requir:31,residu:21,resize_even_imag:7,result:[21,24,26,29,33],return_opt:10,reweight:[17,18],rho:27,rho_crit:3,rho_upd:27,right:1,roll:10,roll_2d:7,roll_rad:7,roll_sequ:7,rot_and_rol:7,rot_matrix:10,rotat:[10,11,20,23,24,26,33],rotate_stack:11,round3:2,round:2,routin:[12,20,23,25,28,31,32],run:[22,35,37,40],run_scipt:37,run_script:[35,36,38,40,43,44],same:20,samuel:[12,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,39,40],sat:7,scale:[2,33],scale_num:24,scan:7,scheme:30,scienc:27,scipi:20,script:[35,37,38,39,40,44,46],section:30,seed:44,sensor:12,set:[19,22,39,40],set_initial_x:19,set_out_str:40,set_patch:7,set_up_log:9,shack:12,shan:23,shape:[0,11],shape_test:[17,34],sigma:[12,13,14,23,25,27,30,35,43],sigma_from_snr:14,sigma_mad:14,sigma_upd:27,signal:0,simpl:21,singl:[20,22,26],singular:[29,31],size:[8,22,26],snr:14,soft:[25,29,31],some:[12,37],sourc:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37,38,39,40,43,44,46],space:12,spars:21,sparsiti:30,specif:26,specifi:[21,31,32,40],spectral:19,speed:27,speed_switch:27,speed_up:27,split:27,stack:33,standard:[25,26,27,29],standardpsf:26,standardpsfnograd:26,stat:0,step:[26,27],str:[20,21,24,25,26,28,29,31,33],string:[31,40],sub:29,subit:29,sum:24,svd:[17,18,29],svd_thresh:31,svd_thresh_coef:31,swicth:27,t_h:3,tau:27,tau_upd:27,term:27,test:[21,31,40],test_deconvolut:40,than:2,theori:27,theta:46,thi:[2,12,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,39,40],thresh:29,thresh_factor:30,thresh_typ:[29,31],threshold:[19,21,25,29,30,31],threshold_typ:[25,31],toler:[19,21],transform:[17,18,23,24],transpos:26,transpose_test:13,treshold_typ:29,tupl:[19,23,29,32,33],turn:27,turn_on:27,type:0,u_init:29,unchang:24,until:27,updat:[21,27,29],update_centroid:12,update_lambda:27,update_param:27,update_u:29,update_weight:[12,21,29],update_xi:12,upon:[19,27],uri:12,use_fista:27,uses:2,v_comov:3,val:[2,11],valid:1,valu:[2,19,21,26,27,28,29,31],valueerror:[20,22,25,31,32],variabl:27,variant:[20,22,26],vector:31,version:[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,39,40],vinteg_2arg:5,wakin:30,warn:4,warn_str:4,wave:12,wave_thresh_factor:22,wavelength:43,wavelet:[17,18,21,24,29],wavelet_level:22,wavelet_opt:24,weak:12,weight:[12,21,27,29,30,44],width:23,window:[7,21],within:2,work:[12,23,26],www:[12,20],x_arg:13,x_bin:11,x_bins_step:11,x_matrix:6,x_new:27,x_old:27,x_prox:27,x_shape:13,x_temp:27,x_val:2,xerr:6,xyz2radec:1,y_arg:13,y_shape:13,yerr:6,yinghao:26,zero:[1,2,26]},titles:["functions package","functions.astro module","functions.comp module","functions.cosmo2 module","functions.errors module","functions.extra_math module","functions.fits module","functions.image module","functions.interface module","functions.log module","functions.matrix module","functions.np_adjust module","functions.shape module","functions.signal module","functions.stats module","functions.types module","Welcome to PSF&#8217;s documentation!","psf","psf package","psf.algorithms module","psf.convolve module","psf.cost module","psf.deconvolve module","psf.directional module","psf.linear module","psf.noise module","psf.operators module","psf.optimisation module","psf.plotting module","psf.proximity module","psf.reweight module","psf.svd module","psf.transform module","psf.wavelet module","psf_scripts package","psf_scripts.add_noise_script module","psf_scripts.assign_random_psf module","psf_scripts.check_residual module","psf_scripts.compare module","psf_scripts.deconvolution_args module","psf_scripts.deconvolution_script module","psf_scripts.deconvolution_script_cython module","psf_scripts.deconvolution_script_pypy module","psf_scripts.extract_euclid_psf module","psf_scripts.metrics module","psf_scripts.reconstruction_script_v2 module","psf_scripts.shape_test module"],titleterms:{"function":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],add_noise_script:35,algorithm:19,assign_random_psf:36,astro:1,check_residu:37,comp:2,compar:38,content:[0,16,18,34],convolv:20,cosmo2:3,cost:21,deconvolution_arg:39,deconvolution_script:40,deconvolution_script_cython:41,deconvolution_script_pypi:42,deconvolv:22,direct:23,document:16,error:4,extra_math:5,extract_euclid_psf:43,fit:6,imag:7,interfac:8,linear:24,log:9,matrix:10,metric:44,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],nois:25,np_adjust:11,oper:26,optimis:27,packag:[0,18,34],plot:28,proxim:29,psf:[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],psf_script:[34,35,36,37,38,39,40,41,42,43,44,45,46],reconstruction_script_v2:45,reweight:30,shape:12,shape_test:46,signal:13,stat:14,submodul:[0,18,34],svd:31,transform:32,type:15,wavelet:33,welcom:16}})