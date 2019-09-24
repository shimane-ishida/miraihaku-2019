FROM centos:7.4.1708

RUN yum -y update

# 外部リポジトリ（EPEL, Remi）を追加
RUN yum -y install epel-release
RUN yum -y install http://rpms.remirepo.net/enterprise/remi-release-7.rpm

# apache その他 phpパッケージを導入
RUN yum -y install httpd


CMD ["/usr/sbin/httpd","-D","FOREGROUND"]
COPY ./http.d/develop.conf /etc/httpd/conf.d

WORKDIR /var/www/html