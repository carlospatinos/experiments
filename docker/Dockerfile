FROM fedora 

RUN yum update -y && yum install -q -y tar xinetd

RUN groupadd dbsa
RUN useradd -g dbsa dbsa
RUN mkdir /opt/versant
ADD versant.varfile versant.varfile
ADD http://eselivm2v238l.lmera.carloscompany.se:8081/nexus/content/groups/public/com/versant/Versant_JPA_Server/1.0.12/Versant_JPA_Server-1.0.12.gz /Versant_JPA_Server-1.0.12.gz
RUN tar xzf /Versant_JPA_Server-1.0.12.gz 
RUN /Versant_JPA_Server_8.0.2.30_2185_RHEL6.0_64bit.sh -q -varfile versant.varfile

WORKDIR /opt/versant/vjpa_server/bin
USER dbsa

RUN ./makedb -nofeprofile dps_integration
RUN ./createdb dps_integration
RUN ./startdb dps_integration
RUN ./dbuser -add -n versant -passwd shversant -role DBA dps_integration

EXPOSE 5019

USER root
CMD ["xinetd", "-d", "-dontfork"]

