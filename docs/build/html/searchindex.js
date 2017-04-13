Search.setIndex({envversion:46,filenames:["functions","functions.astro","functions.comp","functions.cosmo2","functions.errors","functions.extra_math","functions.fits","functions.image","functions.interface","functions.log","functions.matrix","functions.np_adjust","functions.shape","functions.signal","functions.stats","functions.string","functions.system","functions.types","index","lib","lib.algorithms","lib.convolve","lib.cost","lib.deconvolve","lib.directional","lib.file_io","lib.gradient","lib.linear","lib.noise","lib.optimisation","lib.other_methods","lib.plotting","lib.proximity","lib.quality","lib.reweight","lib.sf_deconvolve_args","lib.shape","lib.svd","lib.tests","lib.transform","lib.wavelet","modules","sf_deconvolve"],objects:{"":{functions:[0,4,0,"-"],lib:[19,4,0,"-"],sf_deconvolve:[42,4,0,"-"]},"functions.astro":{ang_sep:[1,7,1,""],check_dec:[1,7,1,""],check_obj:[1,7,1,""],check_ra:[1,7,1,""],deg2rad:[1,7,1,""],flux2mag:[1,7,1,""],mag2flux:[1,7,1,""],rad2deg:[1,7,1,""],radec2xyz:[1,7,1,""],xyz2radec:[1,7,1,""]},"functions.comp":{check_float:[2,7,1,""],check_int:[2,7,1,""],check_min:[2,7,1,""],check_minmax:[2,7,1,""],find_bin:[2,7,1,""],nan2one:[2,7,1,""],nan2zero:[2,7,1,""],num_bins:[2,7,1,""],round3:[2,7,1,""],scale:[2,7,1,""],within:[2,7,1,""],x_vals:[2,7,1,""]},"functions.cosmo2":{E:[3,7,1,""],E_inv:[3,7,1,""],age:[3,7,1,""],check_cosmo:[3,7,1,""],dD_prop_dz:[3,7,1,""],dV_comov_dz:[3,7,1,""],d_H:[3,7,1,""],d_angdi:[3,7,1,""],d_comov:[3,7,1,""],d_lum:[3,7,1,""],d_prop:[3,7,1,""],rho_crit:[3,7,1,""],t_H:[3,7,1,""],v_comov:[3,7,1,""]},"functions.errors":{catch_error:[4,7,1,""],file_name_error:[4,7,1,""],warn:[4,7,1,""]},"functions.extra_math":{factor:[5,7,1,""],fourier_derivative:[5,7,1,""],integ_2arg:[5,7,1,""],k_val:[5,7,1,""],mfactor:[5,7,1,""],vinteg_2arg:[5,7,1,""]},"functions.fits":{fit_odr:[6,7,1,""],least_squares:[6,7,1,""],linear_fit:[6,7,1,""],polynomial:[6,7,1,""],polynomial_fit:[6,7,1,""],x_matrix:[6,7,1,""]},"functions.image":{FetchWindows:[7,5,1,""],SAT:[7,5,1,""],downsample:[7,7,1,""],fftconvolve:[7,7,1,""],fftdeconvolve:[7,7,1,""],gen_mask:[7,7,1,""],image_centres:[7,7,1,""],kernel_pattern:[7,7,1,""],pixel_pos:[7,7,1,""],rearrange_kernel:[7,7,1,""],resize_even_image:[7,7,1,""],roll_2d:[7,7,1,""],roll_sequence:[7,7,1,""],rot_and_roll:[7,7,1,""],window:[7,7,1,""]},"functions.image.FetchWindows":{get_pixels:[7,6,1,""],n_pixels:[7,6,1,""],scan:[7,6,1,""]},"functions.image.SAT":{get_area:[7,6,1,""],get_npx:[7,6,1,""],get_var:[7,6,1,""],set_patch:[7,6,1,""],set_patches:[7,6,1,""]},"functions.interface":{h_line:[8,7,1,""],progress_bar:[8,7,1,""]},"functions.log":{close_log:[9,7,1,""],set_up_log:[9,7,1,""]},"functions.matrix":{fancy_transpose:[10,7,1,""],ftl:[10,7,1,""],ftr:[10,7,1,""],gram_schmidt:[10,7,1,""],nuclear_norm:[10,7,1,""],project:[10,7,1,""],rot_matrix:[10,7,1,""],rotate:[10,7,1,""]},"functions.np_adjust":{data2np:[11,7,1,""],pad2d:[11,7,1,""],rotate:[11,7,1,""],rotate_stack:[11,7,1,""],x_bins:[11,7,1,""],x_bins_step:[11,7,1,""]},"functions.shape":{Ellipticity:[12,5,1,""]},"functions.shape.Ellipticity":{get_centroid:[12,6,1,""],get_ellipse:[12,6,1,""],get_moments:[12,6,1,""],update_centroid:[12,6,1,""],update_weights:[12,6,1,""],update_xy:[12,6,1,""]},"functions.signal":{Gaussian_filter:[13,7,1,""],mex_hat:[13,7,1,""],mex_hat_dir:[13,7,1,""],transpose_test:[13,7,1,""]},"functions.stats":{autocorr2d:[14,7,1,""],chi2_gof:[14,7,1,""],gaussian:[14,7,1,""],gaussian_kernel:[14,7,1,""],mad:[14,7,1,""],med_snr:[14,7,1,""],mse:[14,7,1,""],psnr2:[14,7,1,""],psnr:[14,7,1,""],psnr_stack:[14,7,1,""],sigma_from_snr:[14,7,1,""],sigma_mad:[14,7,1,""]},"functions.string":{extract_num:[15,7,1,""]},"functions.system":{get_files:[16,7,1,""]},"lib.algorithms":{PowerMethod:[20,5,1,""]},"lib.algorithms.PowerMethod":{get_spec_rad:[20,6,1,""],set_initial_x:[20,6,1,""]},"lib.convolve":{convolve:[21,7,1,""],psf_convolve:[21,7,1,""]},"lib.cost":{costFunction:[22,5,1,""],costTest:[22,5,1,""]},"lib.cost.costFunction":{check_cost:[22,6,1,""],check_residual:[22,6,1,""],get_cost:[22,6,1,""],l1norm:[22,6,1,""],l2norm:[22,6,1,""],nucnorm:[22,6,1,""],plot_cost:[22,6,1,""],update_weights:[22,6,1,""]},"lib.cost.costTest":{get_cost:[22,6,1,""]},"lib.deconvolve":{get_lambda:[23,7,1,""],perform_reweighting:[23,7,1,""],run:[23,7,1,""],set_condat_param:[23,7,1,""],set_grad_op:[23,7,1,""],set_linear_op:[23,7,1,""],set_lowr_thresh:[23,7,1,""],set_noise:[23,7,1,""],set_optimisation:[23,7,1,""],set_primal_dual:[23,7,1,""],set_prox_op_and_cost:[23,7,1,""],set_sparse_weights:[23,7,1,""]},"lib.directional":{convolve_dir_filters:[24,7,1,""],get_dir_filters:[24,7,1,""]},"lib.file_io":{check_data_format:[25,7,1,""],read_file:[25,7,1,""],read_from_fits:[25,7,1,""],read_input_files:[25,7,1,""],write_output_files:[25,7,1,""],write_to_fits:[25,7,1,""]},"lib.gradient":{GradBasic:[26,5,1,""],GradZero:[26,5,1,""],StandardPSF:[26,5,1,""],StandardPSFnoGrad:[26,5,1,""]},"lib.gradient.GradBasic":{MtMX:[26,6,1,""],get_grad:[26,6,1,""]},"lib.gradient.GradZero":{get_grad:[26,6,1,""]},"lib.gradient.StandardPSF":{MX:[26,6,1,""],MtX:[26,6,1,""]},"lib.linear":{Identity:[27,5,1,""],LinearCombo:[27,5,1,""],Wavelet:[27,5,1,""]},"lib.linear.Identity":{adj_op:[27,6,1,""],op:[27,6,1,""]},"lib.linear.LinearCombo":{adj_op:[27,6,1,""],op:[27,6,1,""]},"lib.linear.Wavelet":{adj_op:[27,6,1,""],op:[27,6,1,""]},"lib.noise":{add_noise:[28,7,1,""],denoise:[28,7,1,""]},"lib.optimisation":{Condat:[29,5,1,""],FISTA:[29,5,1,""],ForwardBackward:[29,5,1,""],GenForwardBackward:[29,5,1,""]},"lib.optimisation.Condat":{iterate:[29,6,1,""],update:[29,6,1,""],update_param:[29,6,1,""]},"lib.optimisation.FISTA":{speed_switch:[29,6,1,""],speed_up:[29,6,1,""],update_lambda:[29,6,1,""]},"lib.optimisation.ForwardBackward":{iterate:[29,6,1,""],update:[29,6,1,""]},"lib.optimisation.GenForwardBackward":{iterate:[29,6,1,""],update:[29,6,1,""]},"lib.other_methods":{pseudo_inverse:[30,7,1,""]},"lib.plotting":{plotCost:[31,7,1,""]},"lib.proximity":{LowRankMatrix:[32,5,1,""],Positive:[32,5,1,""],ProximityCombo:[32,5,1,""],SubIter:[32,5,1,""],Threshold:[32,5,1,""],positivity_operator:[32,7,1,""]},"lib.proximity.LowRankMatrix":{op:[32,6,1,""]},"lib.proximity.Positive":{op:[32,6,1,""]},"lib.proximity.ProximityCombo":{op:[32,6,1,""]},"lib.proximity.SubIter":{op:[32,6,1,""],update_u:[32,6,1,""],update_weights:[32,6,1,""]},"lib.proximity.Threshold":{op:[32,6,1,""],update_weights:[32,6,1,""]},"lib.quality":{e_error:[33,7,1,""],nmse:[33,7,1,""]},"lib.reweight":{cwbReweight:[34,5,1,""]},"lib.reweight.cwbReweight":{reweight:[34,6,1,""]},"lib.sf_deconvolve_args":{ArgParser:[35,5,1,""],get_opts:[35,7,1,""]},"lib.sf_deconvolve_args.ArgParser":{convert_arg_line_to_args:[35,6,1,""]},"lib.shape":{Ellipticity:[36,5,1,""],ellipticity_atoms:[36,7,1,""],shape_project:[36,7,1,""]},"lib.shape.Ellipticity":{get_centroid:[36,6,1,""],get_ellipse:[36,6,1,""],get_moments:[36,6,1,""],update_centroid:[36,6,1,""],update_weights:[36,6,1,""],update_xy:[36,6,1,""]},"lib.svd":{find_n_pc:[37,7,1,""],svd_thresh:[37,7,1,""],svd_thresh_coef:[37,7,1,""]},"lib.tests":{test_deconvolution:[38,7,1,""]},"lib.transform":{cube2map:[39,7,1,""],cube2matrix:[39,7,1,""],map2cube:[39,7,1,""],map2matrix:[39,7,1,""],matrix2cube:[39,7,1,""],matrix2map:[39,7,1,""]},"lib.wavelet":{call_mr_transform:[40,7,1,""],filter_convolve:[40,7,1,""],filter_convolve_stack:[40,7,1,""],get_mr_filters:[40,7,1,""]},functions:{"interface":[8,4,0,"-"],astro:[1,4,0,"-"],comp:[2,4,0,"-"],cosmo2:[3,4,0,"-"],errors:[4,4,0,"-"],extra_math:[5,4,0,"-"],fits:[6,4,0,"-"],image:[7,4,0,"-"],log:[9,4,0,"-"],matrix:[10,4,0,"-"],np_adjust:[11,4,0,"-"],shape:[12,4,0,"-"],signal:[13,4,0,"-"],stats:[14,4,0,"-"],string:[15,4,0,"-"],system:[16,4,0,"-"]},lib:{algorithms:[20,4,0,"-"],convolve:[21,4,0,"-"],cost:[22,4,0,"-"],deconvolve:[23,4,0,"-"],directional:[24,4,0,"-"],file_io:[25,4,0,"-"],gradient:[26,4,0,"-"],linear:[27,4,0,"-"],noise:[28,4,0,"-"],optimisation:[29,4,0,"-"],other_methods:[30,4,0,"-"],plotting:[31,4,0,"-"],proximity:[32,4,0,"-"],quality:[33,4,0,"-"],reweight:[34,4,0,"-"],sf_deconvolve_args:[35,4,0,"-"],shape:[36,4,0,"-"],svd:[37,4,0,"-"],tests:[38,4,0,"-"],transform:[39,4,0,"-"],wavelet:[40,4,0,"-"]},sf_deconvolve:{check_psf:[42,7,1,""],main:[42,7,1,""],run_script:[42,7,1,""],set_out_string:[42,7,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["np","module","Python module"],"5":["np","class","Python class"],"6":["np","method","Python method"],"7":["np","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"np:module","5":"np:class","6":"np:method","7":"np:function"},terms:{"2007n":[12,36],"3103c":[12,36],"abstract":[12,36],"case":26,"class":[7,12,20,22,23,26,27,29,32,33,34,35,36,37],"default":[14,20,21,22,28,29,33,35,36,37,38,40],"final":31,"float":[14,20,22,23,24,28,29,32,33,34,37],"import":[33,36],"int":[20,22,23,24,25,29,36,37,38],"ngol\u00e9":[33,36],"return":[14,21,22,23,24,25,26,27,28,29,30,32,33,35,36,37,38,39,40],"short":18,"true":[20,22,29,40],absolut:23,action:26,activ:29,add:[23,28],add_nois:28,addit:[27,32],addition:23,additon:40,adj_op:27,adjoint:27,after:[22,32],algorithm:[],algoritm:29,all:[7,21,27,32,37],allow:35,alreadi:23,altern:30,amplitud:14,analys:[33,36],analysi:34,ang_sep:1,angl:[1,10,24],angle_num:24,ani:14,aplli:33,appendix:36,appli:[14,32],applic:[29,34],approxim:18,arbitrari:27,arg1:5,arg2:5,arg:[7,35],argpars:35,argument:[23,27,35],argumentpars:35,arrai:[2,14,20,21,22,23,24,25,26,27,28,30,32,34,36,37,38,39,40,42],array_shap:7,arrrai:20,arxiv:[12,36,42],ascens:1,assess:33,astro:[],astropi:21,author:[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,42],auto:37,auto_iter:29,auto_run:20,autocorr2d:14,automat:[20,29],avail:18,averag:38,b2010:29,backward:29,baker:[12,36],base:[12,20,22,24,26,27,29,32,33,34,35,36],basic:[20,26],bauschk:29,been:[32,42],begin:29,between:[14,22],bin_siz:2,binari:25,blank:35,blanklin:36,bm2007:[12,36],bool:[20,21,22,29,36,40],boyd:34,c2013:[12,29,36],cacluat:36,calcualt:20,calcul:[14,20,22,23,26,30,36],call:[29,40],call_mr_transform:40,can:[14,27],cand:34,catch_error:4,centroid:[12,36],cfm:[12,36],chapter:29,check:[1,22,23,25,42],check_cosmo:3,check_cost:22,check_data_format:25,check_dec:1,check_float:2,check_int:2,check_min:2,check_minmax:2,check_obj:1,check_psf:42,check_ra:1,check_residu:22,chi2_gof:14,classs:26,clean:38,clean_data_fil:38,close_log:9,coars:40,code:[18,42],coeffici:[22,24,27,32,37],com:[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,42],combin:[23,27,32],combo:32,comibin:27,comment:35,comp:[],compon:[36,37],composit:29,comput:33,condat:[23,29],constraint:29,contain:[12,20,21,22,24,26,27,28,29,30,31,32,33,34,36,37,38,39,40,42],contraint:22,converg:[20,22,23,29],convert:35,convert_arg_line_to_arg:35,convex:29,convolut:[21,26],convolv:[],convolve_dir_filt:24,convolve_fft:21,corner:7,correct:25,correl:37,correspond:14,cosmo2:[],cost:[],cost_list:31,costfunct:22,costtest:22,creat:42,criteria:29,cropper:[12,36],cube2map:39,cube2matrix:39,cube:39,current:[25,29,36],current_file_nam:25,custom:35,cwb2007:34,cwbreweight:34,d_angdi:3,d_comov:3,d_h:3,d_lum:3,d_prop:3,data2np:11,data:[2,7,10,11,12,14,20,21,22,23,24,25,26,27,28,32,33,34,36,37,38,39,40,42],data_cub:39,data_exp:14,data_file_nam:25,data_map:39,data_matrix:39,data_ob:14,data_s:7,data_shap:[7,14,20,23,32,40],date:[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,42],dd_prop_dz:3,ddof:14,deafult:36,dec:1,decconvolv:23,decim:2,declin:1,decomposit:37,deconv_data:38,deconvolut:[22,23,25,30,35,38,42],deconvolution_script:[25,35],deconvolv:[],decor:2,defin:[12,20,23,25,26,27,32,35,36],defualt:[26,36],defult:[22,35],deg2rad:1,degre:[21,27],degred:22,denois:28,describ:[18,34],desier:14,desir:14,develop:[14,36],deviat:[14,23,28,38],dict:23,differ:[21,22],dimens:[14,21,25,28,33,36],direct:[],dispers:14,distanc:[33,36],distribut:14,doe:[25,28,38],domain:23,downsampl:7,dtype:11,dual:[23,25,29],dual_r:25,dummi:[26,27],dv_comov_dz:3,e_error:33,e_inv:3,each:[21,22],either:[21,29],element:32,ellipt:[12,33,36,38],ellipticity_atom:36,engin:29,enhanc:34,entri:37,equat:[29,33,36,42],error:[],estim:[12,32,36],exampl:[33,36],except:[2,4],execut:42,expect:25,experi:[12,36],exponenti:36,express:[12,36],extens:25,extra_factor:32,extra_math:[],extract_num:15,f2017:42,factor:[5,7,32,34,37],fals:[7,13,21,22,36,40],fancy_transpos:10,farren:[18,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,42],fetchwindow:7,fft:[21,30],fftconvolv:[7,21],fftdeconvolv:7,field:[33,36],file:[22,25,31,38,40],file_io:[],file_nam:[4,25],file_name_error:4,filenam:9,filter:[23,24,27,40],filter_convolv:40,filter_convolve_stack:40,filter_rot:40,find:37,find_bin:2,find_n_pc:37,first:[28,33],fista:29,fit:[],fit_odr:6,fix:[21,26,29],flux2mag:1,flux:1,follow:[33,36],form:22,format:[15,25,35],forward:29,forwardbackward:29,fourier:[13,34],fourier_deriv:5,fred:[12,24,26,33,36],from:[14,25,26,28,29,32,33,34,35,36,39,42],front:[12,36],ftl:10,ftr:10,full:22,func:[2,5,7],galaxi:[12,23,36,42],gauss:28,gaussian:[14,28,38],gaussian_filt:13,gaussian_kernel:14,gen_mask:7,gener:[29,36],genforwardbackward:29,get:[20,22,23,24,26,35,40],get_area:7,get_centroid:[12,36],get_cost:22,get_dir_filt:24,get_ellips:[12,36],get_fil:16,get_grad:26,get_lambda:23,get_moment:[12,36],get_mr_filt:40,get_npx:7,get_opt:35,get_pixel:7,get_spec_rad:20,get_var:7,given:[21,30,36,38,39],gmail:[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,42],grad:[22,29],gradbas:26,gradient:[],gradzero:26,gram_schmidt:10,guess:29,h_0:3,h_line:8,hao:24,hard:[28,32,37],hartman:[12,36],have:[21,32],here:18,http:[12,21,36,42],ident:27,im_shap:39,imag:[],image1:33,image2:33,image_centr:7,image_shap:7,implement:[14,18,20,22,29,32,33,34,36,42],individu:39,inhereit:29,inherit:26,ini:35,initi:[20,23,29,32],initialis:[20,23,29,36],input:[1,14,20,21,22,23,24,25,26,27,28,30,32,33,35,36,37,39,40,42],instanc:[20,23,27,32,37,42],integ:37,integ_2arg:5,interfac:[],intermedi:29,interv:22,invalid:[14,25,33,37,39],invers:[29,30],involv:29,isap:40,iter:[12,20,22,29,32,36],journal:[29,34],k_val:5,keep:40,keren:14,kerenl:14,kernel:[7,14,21,30,38],kernel_pattern:7,kernel_shap:7,keyword:[23,27],known:23,kwagr:23,kwarg:[7,23,27,32,35],l1norm:22,l2norm:22,lambda:[23,29],lambda_init:29,lambda_reg:22,lambda_upd:29,layout:[7,39],lead:23,learn:[33,36],least_squar:6,left:37,lens:[12,36],less:[2,25],level:[23,28],lib:[],lim_low:5,lim_up:5,line:35,linear:[],linear_fit:6,linearcombo:27,lipschitzian:29,list:[25,27,28,29,31,32,36,40],log:[],logger:42,low:[18,22,23,32],lowr:22,lowr_typ:32,lowrankmatrix:32,mad:[14,23],mag2flux:1,mag:1,main:42,make:31,map2cub:39,map2matrix:39,map:39,map_shap:39,mask:7,match:[25,28,38],matrix2cub:39,matrix2map:39,matrix:[],max:14,max_it:[20,29],max_pix:14,max_val:2,max_valu:2,maximum:[20,29],mean:[14,27,33,38],measur:38,med_snr:14,median:[23,38],met:29,method:[12,14,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,42],metod:14,metric:[14,33,38],mex_hat:13,mex_hat_dir:13,mfactor:5,min_val:2,min_valu:2,minim:34,minimum:[2,37],mnra:[12,36],moallem:[12,36],mode:[22,42],moment:[12,36],mr_transform:[27,40],mse:14,mtmx:26,mtx:26,multipl:32,n_bin:2,n_dim:25,n_imag:23,n_iter:[12,36],n_pc:37,n_pixel:7,name:[22,25,31,38],namespac:[35,42],nan2on:2,nan2zero:2,nativ:2,ndarrai:[14,21,22,23,24,25,26,27,28,29,30,32,33,34,36,37,38,39,40,42],ngole:[12,24,26,32,33,36],nmse:33,nois:[],noise_typ:28,noisi:[23,25],noisy_imag:14,none:[4,7,11,12,13,14,15,22,25,27,29,30,31,32,36,37,38,40],norm:[14,22,23],normal:[21,27],normalis:[14,33,36,42],note:[2,12,14,26,29,33,34,36,42],np_adjust:[],npy:25,ns2016:[33,36],nuber:24,nuclear:22,nuclear_norm:10,nucnorm:22,num_bin:2,number:[2,20,21,22,23,25,28,29,36,37,38],numpi:[2,25,36],obj1:1,obj2:1,obj:1,obj_var:[21,26],object:[1,20,21,22,23,26,27,29,32,34],observ:[22,26,42],obtain:[22,40],off:29,offset:36,omega_l:3,omega_m:3,onli:[22,28,32],oper:[13,20,22,23,26,27,29,32,37],operator_t:13,opt:[40,42],optic:[12,36],optim:[22,29,33,36],optimis:[],option:[14,20,21,22,25,27,28,29,30,31,32,35,36,37,38,40],opttimis:23,order:5,org:[12,21,36,42],origin:[22,33],orthonorm:10,osapublish:[12,36],other:[14,30],other_method:[],otherwis:27,ouput:42,output:[2,22,25,31,39,40,42],output_file_nam:25,output_format:25,overrid:35,p_pixel:23,pad2d:11,paper:18,paramat:29,paramet:[14,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,42],parser:35,part:36,path:[16,25,40],peak:14,perfom:28,perform:[20,23,40],perform_reweight:23,pixel:[7,23,38],pixel_po:7,pixel_rad:7,place:[2,29],plot:[],plot_cost:22,plotcost:31,point:[14,29],poisson:28,polynomi:6,polynomial_fit:6,posit:[22,29,32,36],positivity_oper:32,power:20,powermethod:[20,26],preserv:32,primal:[23,25,29],primal_r:25,princip:37,print:22,print_cost:22,problem:[23,29],produc:14,progress_bar:8,project:[10,36],properli:42,properti:26,provid:[2,21,23,24,27,29],prox:29,prox_dual:29,prox_list:29,proxim:[],proximitycombo:32,pseudo:30,pseudo_invers:30,psf:[21,23,25,26,33,35,36,42],psf_convolv:21,psf_file_nam:25,psf_rot:21,psf_type:[21,26],psnr2:14,psnr:14,psnr_stack:14,q00:36,q01:36,q10:36,q11:36,quadrupol:36,qualiti:[],r2012:29,rad2deg:1,radec2xyz:1,radiu:[20,23],raguet:29,rais:[2,14,21,25,28,33,37,38,39],random:[7,20,38],random_se:38,rank:[18,22,23,32],ratio:14,reach:29,read:25,read_fil:25,read_from_fit:25,read_input_fil:25,rearrange_kernel:7,reconstruct:[29,33],recov:[14,26],recoverd_imag:14,recovered_imag:14,refer:[12,29,33,34,36,42],regular:22,regularis:[18,23],relax:29,remov:[28,40],remove_fil:40,requir:37,residu:22,resize_even_imag:7,result:[14,22,25,26,27,30,32,33,38,40],return_norm:36,return_opt:10,reweight:[],rho:29,rho_crit:3,rho_upd:29,right:1,roll:10,roll_2d:7,roll_rad:7,roll_sequ:7,rot_and_rol:7,rot_matrix:10,rotat:[10,11,21,24,26,27,40],rotate_stack:11,round3:2,round:2,routin:[12,21,24,28,31,33,36,37,39],run:[23,42],run_script:42,s2010:14,same:21,samuel:[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,42],sat:7,scale:[2,40],scan:7,scheme:34,scienc:29,scipi:21,script:[35,42],sec:33,second:33,section:34,seed:38,sensor:[12,36],set:[20,23,29,35,42],set_condat_param:23,set_grad_op:23,set_initial_x:20,set_linear_op:23,set_lowr_thresh:23,set_nois:23,set_optimis:23,set_out_str:42,set_patch:7,set_primal_du:23,set_prox_op_and_cost:23,set_sparse_weight:23,set_up_log:9,sf_deconvolve_arg:[],shack:[12,36],shan:24,shape:[],shape_project:36,siam:[33,36],sigma:[12,13,14,23,24,28,29,34,36],sigma_from_snr:14,sigma_mad:14,sigma_upd:29,signa:14,signal:[],simpl:22,singl:[21,23,26],singular:[23,32,37],size:[8,14,26,36],skip:35,snr:14,soft:[28,32,37],some:[12,33,36],sourc:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,42],space:[12,36,42],spars:[22,23],sparsiti:[18,23,34],spec_rad:23,specif:26,specifi:[14,22,25,37,39,42],spectral:[20,23],speed:29,speed_switch:29,speed_up:29,split:[23,29],squar:33,stack:[14,33,38,40],standard:[14,23,26,28,29,32,38],standardpsf:26,standardpsfnograd:26,starck:[33,36],stat:[],step:[26,29],str:[14,21,22,25,26,27,28,31,32,35,37,38,40],string:[],style:35,sub:32,subit:32,sum:[14,27],summari:18,survei:42,svd:[],svd_thresh:37,svd_thresh_coef:37,swicth:29,system:[],t_h:3,tau:[23,29],tau_upd:29,techniqu:[23,36],term:29,test:[],test_deconvolut:38,than:[2,25],them:23,theori:29,thi:[2,12,14,18,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,42],thresh:32,thresh_factor:34,thresh_typ:[32,37],threshold:[20,22,23,28,32,34,37],threshold_typ:[28,37],toler:[20,22],total:23,transform:[],transport:[33,36],transpos:26,transpose_test:13,treshold_typ:32,tupl:[14,20,23,24,25,32,36,39,40],turn:29,turn_on:29,two:33,type:[],u_init:32,unchang:27,under:14,until:29,updat:[22,23,29,32,36,42],update_centroid:[12,36],update_lambda:29,update_param:29,update_u:32,update_weight:[12,22,32,36],update_xi:[12,36],upon:[20,29],uri:[12,36],use_fista:29,uses:2,v_comov:3,val:[2,11],valid:1,valu:[2,14,20,22,23,26,28,29,31,32,33,36,37],valueerror:[14,21,25,28,33,37,38,39],variabl:[23,29],variant:[21,23,26,42],vector:37,version:[14,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,42],vinteg_2arg:5,wakin:34,warn:4,warn_str:4,wave:[12,36],wavelet:[],wavelet_opt:27,weak:[12,36],weight:[12,22,23,27,29,30,32,34,36],width:24,window:[7,22],within:2,work:[12,24,26,33,36],write:25,write_output_fil:25,write_to_fit:25,www:[12,21,36],x_arg:13,x_bin:11,x_bins_step:11,x_matrix:6,x_new:29,x_old:29,x_prox:29,x_shape:13,x_temp:29,x_val:2,xerr:6,xyz2radec:1,y_arg:13,y_shape:13,yerr:6,yield:35,yinghao:26,zero:[1,2,26,36]},titles:["functions package","functions.astro module","functions.comp module","functions.cosmo2 module","functions.errors module","functions.extra_math module","functions.fits module","functions.image module","functions.interface module","functions.log module","functions.matrix module","functions.np_adjust module","functions.shape module","functions.signal module","functions.stats module","functions.string module","functions.system module","functions.types module","SF_DECONVOLVE Documentation","lib package","lib.algorithms module","lib.convolve module","lib.cost module","lib.deconvolve module","lib.directional module","lib.file_io module","lib.gradient module","lib.linear module","lib.noise module","lib.optimisation module","lib.other_methods module","lib.plotting module","lib.proximity module","lib.quality module","lib.reweight module","lib.sf_deconvolve_args module","lib.shape module","lib.svd module","lib.tests module","lib.transform module","lib.wavelet module","sf_deconvolve","sf_deconvolve module"],titleterms:{"function":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],algorithm:20,astro:1,comp:2,content:[0,18,19],convolv:21,cosmo2:3,cost:22,deconvolv:23,direct:24,document:18,error:4,extra_math:5,file_io:25,fit:6,gradient:26,imag:7,interfac:8,lib:[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],linear:27,log:9,matrix:10,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,42],nois:28,np_adjust:11,optimis:29,other_method:30,packag:[0,19],plot:31,proxim:32,qualiti:33,reweight:34,sf_deconvolv:[18,41,42],sf_deconvolve_arg:35,shape:[12,36],signal:13,stat:14,string:15,submodul:[0,19],svd:37,system:16,test:38,transform:39,type:17,wavelet:40,welcom:[]}})